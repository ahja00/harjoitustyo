import requests
import json
from datetime import datetime, timezone

price_endpoint = ""
price_limit = 10.0  # snt/kWh

response = requests.get(price_endpoint)

if response.status_code == 200:
    data = response.json()
    current_time = datetime.now(timezone.utc)
    current_price = None

    for entry in data['prices']:
        start_time = datetime.strptime(entry['startDate'], "%Y-%m-%dT%H:%M:%S.%fZ").replace(tzinfo=timezone.utc)
        end_time = datetime.strptime(entry['endDate'], "%Y-%m-%dT%H:%M:%S.%fZ").replace(tzinfo=timezone.utc)

        if start_time <= current_time < end_time:
            current_price = entry['price']
            break

    result = {}
    if current_price is not None:
        if current_price > price_limit:
            result["status"] = "expensive"
            result["message"] = f"The price of electricity is high. ({current_price} snt/kWh).It's not worth doing laundry now."
        else:
            result["status"] = "cheap"
            result["message"] = f"The price of electricity is affordable ({current_price} snt/kWh). Now is a good time to do laundry!"
    else:
        result["status"] = "no_data"
        result["message"] = "No pricing information available for this class."

    
    with open("status.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False)
else:
    with open("status.json", "w", encoding="utf-8") as f:
        json.dump({
            "status": "error",
            "message": f"Error in API call: {response.status_code}"
        }, f, ensure_ascii=False)