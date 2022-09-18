export const destinations = [
    {
        "id": 0,
        "name": "Zapier",
        "website": "https://zapier.com",
        "description": "Ability to send data to 750+ tools in minutes.\r\n MailChimp, Asana, Pipedrive, Zendesk, Zoho CRM, Basecamp, Office 365, Quickbooks online, Freshdesk and more. \r\n Build workflows and automate your processes with ease.",
        "categories": [
            "Raw Data"
        ],
        "platforms": [
            "server"
        ],
        "settings_available": [
            "config",
            "source_config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/Groupzapier.svg",
            "logo": "https://app.customerlabs.com/static/Img/zapier.png",
        },
        "price": 15,
        "subscribed": true,
        "enabled": true,
        "live": true,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 1,
        "name": "Webhooks",
        "website": "https://developer.github.com/webhooks/",
        "description": "Send action data via HTTP POST payload to the Webhook URL",
        "categories": [
            "Raw Data"
        ],
        "platforms": [
            "server"
        ],
        "settings_available": [
            "config",
            "workflow",
            "source_config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/Groupwebhook_flow.png",
            "logo": "https://app.customerlabs.com/static/Img/webhook.png",
        },
        "price": 49,
        "subscribed": false,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 2,
        "name": "Sendinblue",
        "website": "https://www.sendinblue.com/",
        "description": "Make your business take flight with the complete sales & marketing toolbox.\r\nGrow. Sell. Engage",
        "categories": [
            "Analytics"
        ],
        "platforms": [
            "browser",
            "server"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path",
            "source_config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/send-in-blue-fly.png",
            "logo": "https://app.customerlabs.com/static/Img/send-in-blue-logo.png",
        },
        "price": 9,
        "subscribed": true,
        "enabled": true,
        "live": true,
        "triggered_paths": [
            {
                "path": "/*",
                "type": {
                    "hash": false,
                    "path": true,
                    "query": false
                },
                "include": true,
                "pattern": "^(\\/[\\s\\S]*)$"
            }
        ],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 3,
        "name": "Segment",
        "website": "https://segment.con",
        "description": "Ability to send data to 180+ software tools in minutes.\r\n Salesforce, HubSpot, FreshSales, Intercom, Slack, Mixpanel, Totango, Marketo and more. \r\n Real-time events. No coding knowledge required..",
        "categories": [
            "Analytics"
        ],
        "platforms": [
            "browser"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/Groupsegment.svg",
            "logo": "https://app.customerlabs.com/static/Img/segment.png",
        },
        "price": 20,
        "subscribed": false,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": true,
        "multiple_domain_support": false
    },
    {
        "id": 4,
        "name": "Mixpanel",
        "website": "https://mixpanel.com",
        "description": "Send events to Mixpanel",
        "categories": [
            "Analytics"
        ],
        "platforms": [
            "browser"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/Groupmixpanel.png",
            "logo": "https://app.customerlabs.com/static/Img/mix_logo.png",
        },
        "price": 9,
        "subscribed": false,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 5,
        "name": "LinkedIn",
        "website": "https://linkedin.com/",
        "description": "Professional Community",
        "categories": [
            ""
        ],
        "platforms": [
            "segment"
        ],
        "settings_available": [
            "config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/linkedIn_side.png",
            "logo": "https://app.customerlabs.com/static/Img/linkedIn_logo.png",
        },
        "price": 9,
        "subscribed": true,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 6,
        "name": "Klaviyo",
        "website": "https://www.klaviyo.com/",
        "description": "Klaviyo helps growth-focused brands drive more sales with super-targeted, highly relevant email, Facebook and Instagram marketing.",
        "categories": [
            "Marketing"
        ],
        "platforms": [
            "browser",
            "server",
            "segment"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path",
            "source_config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/klaviyo_side.png",
            "logo": "https://app.customerlabs.com/static/Img/klaviyo_logo.png",
        },
        "price": 9,
        "subscribed": true,
        "enabled": true,
        "live": true,
        "triggered_paths": [
            {
                "path": "/*",
                "type": {
                    "hash": false,
                    "path": true,
                    "query": false
                },
                "include": true,
                "pattern": "^(\\/[\\s\\S]*)$"
            }
        ],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 7,
        "name": "iZooto",
        "website": "https://www.izooto.com/",
        "description": "Use Web Push Notifications to Drive Leads, Sales & Traffic",
        "categories": [
            "Anaytics"
        ],
        "platforms": [
            "browser"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/GroupiZooto.png",
            "logo": "https://app.customerlabs.com/static/Img/iZooto.png",
        },
        "price": 9,
        "subscribed": false,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 8,
        "name": "Intercom",
        "website": "https://www.intercom.com",
        "description": "Helping businesses have real conversations to build real relationships throughout the entire customer lifecycle.",
        "categories": [
            "Conversion Tracking"
        ],
        "platforms": [
            "browser"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/Groupintercom_whole.png",
            "logo": "https://app.customerlabs.com/static/Img/inter_logo.png",
        },
        "price": 9,
        "subscribed": true,
        "enabled": true,
        "live": true,
        "triggered_paths": [
            {
                "path": "/*",
                "type": {
                    "hash": false,
                    "path": true,
                    "query": false
                },
                "include": true,
                "pattern": "^(\\/[\\s\\S]*)$"
            }
        ],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 9,
        "name": "Indicative",
        "website": "https://www.indicative.com",
        "description": "The most powerful behavioral analytics platform for marketers, product managers, and analysts to understand the complete customer journey.",
        "categories": [
            "Analytics"
        ],
        "platforms": [
            "browser"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/indicative_right.png",
            "logo": "https://app.customerlabs.com/static/Img/indicative_logo.png",
        },
        "price": 9,
        "subscribed": false,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 10,
        "name": "Iiintent",
        "website": "https://www.iiintent.io/",
        "description": "The game has changed. It's time to own and control your growth.\r\nOwn your targeting. Own your market. Legitimately.",
        "categories": [
            "Marketing"
        ],
        "platforms": [
            "browser"
        ],
        "settings_available": [
            "config",
            "path",
            "source_config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/iiintent_side.png",
            "logo": "https://app.customerlabs.com/static/Img/iiintent_logo.png",
        },
        "price": 9,
        "subscribed": false,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 11,
        "name": "Google Sheets",
        "website": "https://www.google.com/sheets/about/",
        "description": "With Google Sheets, you can create, edit, and collaborate wherever you are. For free.",
        "categories": [
            "Storage"
        ],
        "platforms": [
            "server"
        ],
        "settings_available": [
            "config",
            "path",
            "source_config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/sheets_flow.png",
            "logo": "https://app.customerlabs.com/static/Img/g_sheets.png",
        },
        "price": 9,
        "subscribed": true,
        "enabled": false,
        "live": true,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 12,
        "name": "Google Analytics gtag",
        "website": "http://google.com/analytics",
        "description": "Send Custom Events to Google Analytics without writing messy code.\r\nSegment users based on events for in-depth analysis.\r\nCreate event-based re-targeting lists with ease.",
        "categories": [
            "Analytics"
        ],
        "platforms": [
            "browser",
            "server"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path",
            "source_config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/Groupgoogle_line.png",
            "logo": "https://app.customerlabs.com/static/Img/ga.jpg",
        },
        "price": 9,
        "subscribed": true,
        "enabled": true,
        "live": true,
        "triggered_paths": [
            {
                "path": "/*",
                "type": {
                    "hash": false,
                    "path": true,
                    "query": false
                },
                "include": true,
                "pattern": "^(\\/[\\s\\S]*)$"
            }
        ],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 13,
        "name": "Google Analytics",
        "website": "http://google.com/analytics",
        "description": "Send Custom Events to Google Analytics without writing messy code.\r\nSegment users based on events for in-depth analysis.\r\nCreate event-based re-targeting lists with ease.",
        "categories": [
            "Analytics"
        ],
        "platforms": [
            "browser",
            "server"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path",
            "source_config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/Groupgoogle_line.png",
            "logo": "https://app.customerlabs.com/static/Img/ga.jpg",
        },
        "price": 9,
        "subscribed": true,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 14,
        "name": "Google Adwords",
        "website": "https://adwords.google.com/home/",
        "description": "Be seen by customers at the very moment that they’re searching on Google for the things you offer. And only pay when they click to visit your website or call.",
        "categories": [
            "Conversion Tracking"
        ],
        "platforms": [
            "browser",
            "server",
            "segment"
        ],
        "settings_available": [
            "config",
            "workflow",
            "source_config"
        ],
        "images": {
            "left":"https://app.customerlabs.com/static/Img/aw_left.png",
            "logo": "https://app.customerlabs.com/static/Img/aw_logo.png",
        },
        "price": 9,
        "subscribed": true,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 15,
        "name": "Gist",
        "website": "https://getgist.com/",
        "description": "From email to live-chat to marketing automation, a suite of products for marketing, sales, and customer success teams to build better relationships and close more deals. Use one or use them all.",
        "categories": [
            "Analytics"
        ],
        "platforms": [
            "browser"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/gist-small.png",
            "logo": "https://app.customerlabs.com/static/Img/gist-small.png",
        },
        "price": 9,
        "subscribed": false,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 16,
        "name": "Facebook",
        "website": "https://facebook.com",
        "description": "Conversion tracking. See how successful your ad is by seeing what happened as a direct result of your ad.\r\n Optimization. Automatically bid for conversions after you set up your pixel. \r\n Remarketing. Remarket to everyone who visits your site, or just to people who visit specific pages or take specific actions.",
        "categories": [
            "Analytics",
            "Tracking"
        ],
        "platforms": [
            "browser",
            "server",
            "segment"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path",
            "source_config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/Groupfacebook.svg",
            "logo": "https://app.customerlabs.com/static/Img/facebook_.png",
        },
        "price": 9,
        "subscribed": true,
        "enabled": false,
        "live": true,
        "triggered_paths": [
            {
                "path": "/*",
                "type": {
                    "hash": false,
                    "path": true,
                    "query": false
                },
                "include": true,
                "pattern": "^(\\/[\\s\\S]*)$"
            }
        ],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 17,
        "name": "Emblue",
        "website": "https://www.embluemail.com/en/",
        "description": "We make Omnichannel simple",
        "categories": [
            "Marketing"
        ],
        "platforms": [
            "segment"
        ],
        "settings_available": [
            "config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/emblue-line.png",
            "logo": "https://app.customerlabs.com/static/Img/emblue-logo.png",
        },
        "price": 9,
        "subscribed": false,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 18,
        "name": "Drip",
        "website": "https://www.drip.co/",
        "description": "Turn More Email Contacts into Customers with Marketing Automation.\r\nAutomate the customer journey with intuitive marketing automation.\r\nManage your email marketing and track your results.",
        "categories": [
            "Analytics"
        ],
        "platforms": [
            "browser",
            "server"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path",
            "source_config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/Groupdrip.png",
            "logo": "https://app.customerlabs.com/static/Img/drip.png",
        },
        "price": 9,
        "subscribed": false,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 19,
        "name": "Custom Integration",
        "website": "http://customerlabs.co/custom-integration",
        "description": "Custom JavaScript Integration",
        "categories": [
            "''"
        ],
        "platforms": [
            "browser"
        ],
        "settings_available": [
            "''"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/Groupcustom.svg",
            "logo": "https://app.customerlabs.com/static/Img/Groupcustom.png",
        },
        "price": 40,
        "subscribed": true,
        "enabled": false,
        "live": false,
        "triggered_paths": [
            {
                "path": "/cart",
                "type": {
                    "hash": false,
                    "path": true,
                    "query": false
                },
                "include": true,
                "pattern": "^(\\/cart)$"
            }
        ],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 20,
        "name": "Customer.io",
        "website": "https://customer.io/",
        "description": "Send targeted emails, push notifications, and SMS to lower churn, create stronger relationships, and drive subscriptions",
        "categories": [
            "Automation"
        ],
        "platforms": [
            "browser",
            "server"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path",
            "source_config"
        ],
        "images": {
            "left":"https://app.customerlabs.com/static/Img/cl-io-side.png",
            "logo": "https://app.customerlabs.com/static/Img/customerio.png",
        },
        "price": 9,
        "subscribed": false,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 21,
        "name": "ConvertFox",
        "website": "https://convertfox.com/",
        "description": "From email to live-chat to marketing automation, a suite of products for marketing, sales, and customer success teams to build better relationships and close more deals. Use one or use them all.",
        "categories": [
            "Analytics"
        ],
        "platforms": [
            "browser"
        ],
        "settings_available": [
            "config",
            "workflow",
            "path"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/covert_balloon.png",
            "logo": "https://app.customerlabs.com/static/Img/covert-small.png",
        },
        "price": 9,
        "subscribed": false,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    },
    {
        "id": 22,
        "name": "BigQuery",
        "website": "bigquery.cloud.google.com",
        "description": "Send data to your Google BigQuery tables\r\nFocus on analyzing data to find meaningful insights using familiar SQL\r\nAccelerate your insights with powerful analysis",
        "categories": [
            "db"
        ],
        "platforms": [
            "storage"
        ],
        "settings_available": [
            "config"
        ],
        "images": {
            "left": "https://app.customerlabs.com/static/Img/bigquery_flow.png",
            "logo": "https://app.customerlabs.com/static/Img/bq_logo.png",
        },
        "price": 9,
        "subscribed": true,
        "enabled": false,
        "live": false,
        "triggered_paths": [],
        "is_premium": false,
        "multiple_domain_support": false
    }
]