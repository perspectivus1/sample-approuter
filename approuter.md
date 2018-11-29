# AppRouter in Theia
## Setup
1. Launch Theia
2. Somehow get the sample-approuter directory into your Theia workspace (one reasonable method is to upload the directory to https://github.com).
3. Perform the following commands in the terminal pane:
```bash
cd sample-approuter
npm install
```
## Running the Application
* One alternative is to run it using the terminal:
```bash
npm start
```
* Another option is to run a task
Use the Task menu to run the Locally run approuter task
## Accessing the Application
Copy the Theia URL from the address bar; open a new browser tab and paste the URL; suffix the URL with ```/local-run-<port>/<resource>```, where ```<port>``` is ```5000``` in this case, but can be any port that a local process is listening to; ```<resources>``` is the resource that your server serves (e.g. ```index.html```).