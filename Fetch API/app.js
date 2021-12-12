const request = require("request");
const db = require("./db");

const url = "http://icanrefer.jobraiser.com/api/icrweb/home/get_mailFormMaster?token=69fd468f-5a58-11ec-9edd-42010af00005&xes=1";

request({
    url, json: true
}, (err, res, body) => {
    const data = body.data
    mail_len = data.mailTypeList.length;
    status_len = data.stageStatusList.length

    for (let i = 0; i < mail_len; i++) {
        let id = data.mailTypeList[i].id;
        let title = data.mailTypeList[i].title;
        let enable_tracker = data.mailTypeList[i].enableTracker;
        db.query('CALL insert_into_mail_type(?,?,?)', [id, title, enable_tracker], (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
    console.log("Data Inserted into Mail Type database")


    // This is a code to insert the values into stage status table

    for (let i = 0; i < status_len; i++) {
        let status_code = data.stageStatusList[i].statusCode;
        let title = data.stageStatusList[i].title;
        db.query('CALL insert_into_stage_status(?,?)', [status_code, title], (err) => {
            if (err) {
                console.log(err);

            }
        })

    }
    console.log("Data Inserted into stage Status List database")

})








// Request.listen(3000, (req,err)=>{

//     console.log("Server listening on Port");
// })
