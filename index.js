const fs = require('fs');

// Step 1: Read the JSON file
fs.readFile('/home/suresh/Documents/project/directus-migrations/premission.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    console.log("data",data)

    // Step 2: Parse the JSON content
    const jsonArray = JSON.parse(data);
    console.log("jsonArrayjsonArray",jsonArray)
    // Step 3: Define the collection names to check
    // const namesToCheck = [
    //   'hrms_department', 'hrms_employee_deletion_request', 'hrms_employee_details',
    //   'hrms_holiday_list', 'hrms_leave_request', 'hrms_mail_storage_request',
    //   'hrms_new_employee_request', 'hrms_products', 'hrms_time_sheet',
    //   'hrms_leave_request_files', 'hrms_employee_details_files'
    // ];
     const namesToCheck = ['7c034e3f-9dd4-4ea8-b6f2-4383a2f6e462','c4db65df-9946-405a-9650-e6404f3dfb89','ebb98720-c821-48ef-b648-3f81c8355f8f']

   
    // Step 4: Filter the array of objects based on the collection name
    let filteredArray = jsonArray.added.filter(item => namesToCheck.includes(item.role));
    filteredArray= JSON.stringify(filteredArray);
    console.log("filteredArray",filteredArray)

 
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});
