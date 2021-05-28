const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
	const file = request.url == '/' ? './319094.json' : `.${request.url}`;
	
	fs.readFile(file, (err, data) => {
		if (err){
			response.writeHead(400,{"Content-Type":"text/plain"});
			response.write("Not Found");
			response.end();
		}else{
			const extension = file.split(".").pop();
				switch (extension) {
					case 'js':
						response.writeHead(200, { "Content-Type": "text/javascript" });
						break;
					case 'html':
						response.writeHead(200, { "Content-Type": "text/html" });
						break;
					case 'css':
						response.writeHead(200, { "Content-Type": "text/css" });
						break;
					case 'jpeg':
						response.writeHead(200, { "Content-Type": "image/jpeg" });
						break;
					case 'txt':
						response.writeHead(200, { "Content-Type" : "text/plain" });
						break;
					case 'json':
						response.writeHead(200, { "Content-Type": "application/json" });
						break;	
						
					default:
						break;
					}
				response.write(data);
				response.end();
			}
		});
}).listen(8888);

