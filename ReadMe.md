This Utility is ment to easily merge PDFs

Pre req:

Node : v8.9.1

Steps : 

1. Clone the rep 
2. run npm install
3. run npm run local 
4. send the request as 

    curl -X POST \ http://localhost:3010/mergePDF \
  -H 'content-type: application/json' \
  -H 'postman-token: 1ece6f3b-db6e-5b8f-c854-78a5c1b98501' \
  -d '{
	"inputPath": "/Volumes/CARDRIVE/HPSCANS",
	"inputFiles":["scan0001","scan0009"],
	"outputFile":"AllPassportScannedPages"
}'