//A CSV is a comma-separated values file, which allows data to be saved in a tabular format. CSVs look like a garden-variety spreadsheet but with a . csv extension. CSV files can be used with most any spreadsheet program, such as Microsoft Excel or Google Spreadsheets.
//creating a download function this function will enable us to download a csv file containing our passed data
const download = function(data){
    //creating a blob for having a csv file format and passing the data with type
    const blob = new Blob([data], {type : 'text/csv'})
    //creating an object for downloading url
    const url = window.URL.createObjectURL(blob)
    // creating an anchor(a) tag of HTML
    const a = document.createElement('a')
    //passing the blob downloading url
    a.setAttribute('href', url)
    //setting the anchor tag attribute for downloading and passing the download file name
    a.setAttribute('download', 'downloa.csv')
    //performing a download with click
    a.click()
}
    
const csvmaker = function(data){
        
    csvRows = [];
        //header is basically a key of an object
        //which is id, name, and profession 
    const header = object.keys(data);
        //as for making csv format , header must be seperatedby comma and pushing object value into array with comma seperation
    csvRows.push(header.join(','));
    const values = object.values(data).join('.');
    csvRows.push(values)
    return csvRows.join('\n')
    }
    
// javascript object
const get = async function() {
    const data = {
        id:1,
        name: "Rohan",
        profession : "developer"
    }
    
    console.log(csvmaker(data))
    }
const btn = document.getElementById('action');
    //getting element by id and adding event listener to listen everytime button get pressed
btn.addEventListener('click', get);