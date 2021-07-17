# Perfect Set API

## GET /user

Retrieves the specified user information

###### Parameters

| Parameter | Type   | Description      |
| --------- | ------ | ---------------- |
| user      | string | username of user |

###### Response

`Status: 200 OK`

```
[
    {
        "user_id": 1,
        "user_name": "pierre_sidus",
        "user_password": "abc123",
        "is_artist": true,
        "bio": "A rock legend from the outskirts of Seattle",
        "portrait_url": "https://i.ibb.co/kB286y3/Screen-Shot-2021-07-14-at-7-24-50-PM.png",
        "website": "pierresidus.com"
    }
]
```

## POST /user

Adds a new user information

###### Parameters

| Parameter | Type    | Description                    |
| --------- | ------- | ------------------------------ |
| user_name | string  | username of user               |
| password  | string  | password user created          |
| bio       | string  | bio for the user               |
| website   | string  | URL of the user's site         |
| is_artist | boolean | true for artist, false for fan |

###### Response

`Status: 200 OK`

## GET /businesses

Retrieves the list of businesses

###### Parameters

| Parameter  | Type   | Description                              |
| ---------- | ------ | ---------------------------------------- |
| location   | string | location that client provides            |
| categories | string | restaurants, hotels, and/or music venues |

###### Response

`Status: 200 OK`

```
[
    {
        "id": "Wxxvi3LZbHNIDwJ-ZimtnA",
        "name": "The Venetian Las Vegas",
        "address": "3355 South Las Vegas Boulevard,Las Vegas, NV 89109",
        "phone": "(888) 283-6423",
        "yelp_url": "https://www.yelp.com/biz/the-venetian-las-vegas-las-vegas-6?adjust_creative=sPW7kMrjFlvwe__KvAzurg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=sPW7kMrjFlvwe__KvAzurg",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/d1Zb0e641TJbTykV5rVXiQ/o.jpg",
        "categories": [
            "Hotels",
            "Casinos",
            "Resorts"
        ],
        "rating": 4,
        "price": "$$$",
        "latitude": 36.121189,
        "longitude": -115.169657,
        "type": "hotels",
        "date": "2021-07-09",
        "time": "10:00:00"
    },
    {
        "id": "_xbBbHSrWM8vvTo9DO51EA",
        "name": "The Fillmore",
        "address": "1805 Geary Blvd,San Francisco, CA 94115",
        "phone": "(415) 346-3000",
        "yelp_url": "https://www.yelp.com/biz/the-fillmore-san-francisco?adjust_creative=sPW7kMrjFlvwe__KvAzurg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=sPW7kMrjFlvwe__KvAzurg",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/VWRMSQYJRnHDZCeIdQoRSQ/o.jpg",
        "categories": [
            "Music Venues"
        ],
        "rating": 4,
        "price": "$$",
        "latitude": 37.784172,
        "longitude": -122.433104,
        "type": "music venue",
        "date": "2021-08-01",
        "time": "20:30:00"
    }
]
```

## GET /booking/view

Retrieves the list of bookings

###### Parameters

| Parameter | Type    | Description               |
| --------- | ------- | ------------------------- |
| user_id   | integer | specifies the artist user |

###### Response

`Status: 200 OK`

```
[
    {
        "id": "Wxxvi3LZbHNIDwJ-ZimtnA",
        "name": "The Venetian Las Vegas",
        "address": "3355 South Las Vegas Boulevard,Las Vegas, NV 89109",
        "phone": "(888) 283-6423",
        "yelp_url": "https://www.yelp.com/biz/the-venetian-las-vegas-las-vegas-6?adjust_creative=sPW7kMrjFlvwe__KvAzurg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=sPW7kMrjFlvwe__KvAzurg",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/d1Zb0e641TJbTykV5rVXiQ/o.jpg",
        "categories": [
            "Hotels",
            "Casinos",
            "Resorts"
        ],
        "rating": 4,
        "price": "$$$",
        "latitude": 36.121189,
        "longitude": -115.169657,
        "type": "hotels",
        "date": "2021-07-09",
        "time": "10:00:00"
    }
]
```

## POST /booking/newbooking

Adds a new booking for the specified user

###### Parameters

| Parameter     | Type    | Description                              |
| ------------- | ------- | ---------------------------------------- |
| user_id       | integer | user id of the client                    |
| booking_date  | date    | date client selected                     |
| booking_time  | time    | time client selected                     |
| business_name | string  | the business name                        |
| business_id   | string  | the business id from the Yelp API        |
| booking_type  | string  | restaurants, hotels, and/or music venues |
| latitude      | string  | latitude of business location            |
| longitude     | string  | longitude of business location           |

###### Response

`Status: 200 OK`

## DELETE /booking/cancel

Deletes a booking for the specified user

###### Parameters

| Parameter   | Type   | Description                |
| ----------- | ------ | -------------------------- |
| business_id | string | unique id for the business |

###### Response

`Status: 200 OK`

## GET /follows

Retrieves the list of follows based on the specified user

###### Parameters

| Parameter | Type    | Description            |
| --------- | ------- | ---------------------- |
| user_id   | integer | specifies the fan user |

###### Response

`Status: 200 OK`

```
[
    {
        "artist_name": "pierre_sidus",
        "bio": "A rock legend from the outskirts of Seattle",
        "portrait_url": "https://i.ibb.co/kB286y3/Screen-Shot-2021-07-14-at-7-24-50-PM.png",
        "website": "pierresidus.com",
        "tour_dates": [
            {
                "location_name": "The Fillmore",
                "date": "2021-08-01"
            },
            {
                "location_name": "Great American Music Hall",
                "date": "2021-08-02"
            },
            {
                "location_name": "The Venetian Las Vegas",
                "date": "2021-07-09"
            }
        ]
    },
    {
        "artist_name": "djdinoROAR",
        "bio": "A DJ that brings down the house of every Seattle club",
        "portrait_url": "https://i.ibb.co/qNPk8Qf/Screen-Shot-2021-07-14-at-7-24-31-PM.png",
        "website": "djdinoroar.com",
        "tour_dates": [
            {
                "location_name": "Fox Theatre Detroit",
                "date": "2021-08-01"
            },
            {
                "location_name": "UFO Factory",
                "date": "2021-08-02"
            }
        ]
    }
]
```

## POST /follows

Add a new artist for the specified user

###### Parameters

| Parameter | Type    | Description            |
| --------- | ------- | ---------------------- |
| fan_id    | integer | specifies the fan user |
| artist_id | integer | specifies the artist   |

###### Response

`Status: 200 OK`

## DELETE /follows

Delete an artist for the specified user

###### Parameters

| Parameter | Type    | Description            |
| --------- | ------- | ---------------------- |
| fan_id    | integer | specifies the fan user |
| artist_id | integer | specifies the artist   |

###### Response

`Status: 200 OK`
