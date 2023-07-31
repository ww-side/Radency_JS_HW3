# RADENCY_JS_HW3
- NestJS
- Yup

### Create a note object
After sending a POST request to the /notes address, we have created an 
object. If we miss a field, the program will generate an error. 
![Pic](https://images2.imgbox.com/aa/f7/3PhTvgPe_o.png)

Added
validation to each endpoint so that no one can add more properties or
miss one.
![Pic](https://images2.imgbox.com/de/c8/Nl1rkOEg_o.png)

### Delete note
The object is deleted by id after a DELETE request to /notes/:id.
![Pic](https://images2.imgbox.com/e4/11/VAHlcw7Q_o.png)

### Edit note
The object selected by id will be edited after the PATCH request.
![Pic](https://images2.imgbox.com/f7/44/APqEBwv8_o.png)

### Retrieve note
In the /notes/:id path, the selected object will be displayed using a GET request.
![Pic](https://images2.imgbox.com/77/45/QKV4Ks5b_o.png)

### Get all notes
After a GET request to the "/notes" address, an array of objects is displayed
![Pic](https://images2.imgbox.com/db/e6/sMZL4wV4_o.png)

### Stats
After a GET request to the address "/notes/stats", the statistics of objects by category are displayed.
![Pic](https://images2.imgbox.com/95/a0/DtGBfUoF_o.png)

## Additionally
### Get archive
Shows archived notes after a GET request to the notes/archive address
![Pic](https://images2.imgbox.com/59/93/a0tOocqY_o.png)

### Delete note from archive
Removes a note from the archive at notes/archive/:id after a GET request
![Pic](https://images2.imgbox.com/dd/c5/W2hLLxHB_o.png)

### Archive note
Archives the selected note to notes/archive/:id after GET request
![Pic](https://images2.imgbox.com/cb/d2/ZCcVTxHC_o.png)

### Unarchive note
Unarchives the selected note to notes/unarchive/:id after GET request
![Pic](https://images2.imgbox.com/5a/79/zwLjWXKm_o.png)

### Task text
1. Your task is to create a NodeJS application with TypeScript that will have few REST endpoints. No need to wire it with Frontend part that you did in task #2.
2. Endpoints functionality should reflect your work on the frontend side - users can add, edit and remove notes, archive and unarchive them.
3. As an option you can use NestJS instead of NodeJS/Express with TypeScript.

List of endpoints should look like this:

| Query Type | Endpoint     | Action                                                                                                                      |
|------------|--------------|-----------------------------------------------------------------------------------------------------------------------------|
| POST       | /notes       | Create a note object                                                                                                        |
| DELETE     | /notes/:id   | Remove item                                                                                                                 |
| PATCH      | /notes/:id   | Edit item                                                                                                                   |
| GET        | /notes/:id   | Retrieve item                                                                                                               |
| GET        | /notes       | Get all notes                                                                                                               |
| GET        | /notes/stats | Get aggregated data statistics. You don’t have to mock this data. You need to calculate it based on notes objects you have. |

4. Store data in memory as a mocked object. Prepopulate it with 7 notes and use it by default as an initial state so that they are returned when you call an endpoint. You can use the same object structure as in the frontend using following columns: [“Name”, “Date”, “Category”, “Content”] and also additional columns if needed.
5. Use the Postman application to check that your endpoints work correctly.
6. Add validation to each endpoint so that no one can add more properties or miss one. E.g. if you expect { name: <string>, age: <integer> }, there should be no way to send another shape of the object or its data type. You can use Yup for that purpose.