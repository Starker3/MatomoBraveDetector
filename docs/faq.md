## FAQ

__Does this plugin require configuration?__

No, simply install and activate the plugin and you'll be able to track Brave browser agents.

__Does this plugin work with Tag Manager?__

Yes, as long as you bundle matomo.js in your Matomo Configuration variable.

__Why do I need this plugin? Why doesn't this functionality exist already?__

Matomo detects what device/user agent is sending requests to your Matomo server by using the user agent sent with the request to the web server.
The Brave browser is unique because it doesn't send it's own custom "User Agent" with web requests - it pretends to be a normal Chrome browser. The only way to detect if a browser is a Brave browser is with the use a Brave-specific function using Javascript.

__Will this plugin allow be to track Brave browsers with "Shields Up"?__
No, this plugin can't track anything if the Matomo tracking script is being blocked when the Brave browser's shields are up.