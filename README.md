# node-mysql-crud

app.get('/api/data', services.getData);
// insert record
app.post('/api/insert', services.insertData);
// update the address
app.patch('/api/update', services.updateData);
// delete the record based on address
app.delete('/api/delete', services.deleteData);
