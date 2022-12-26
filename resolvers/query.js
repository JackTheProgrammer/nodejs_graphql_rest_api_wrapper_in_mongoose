exports.Query = {
    getStudents: (parent, args, {dataSources}) => {
        console.log("Getting all students\n");
        let studentAPI = dataSources.studentAPI;
        return studentAPI.getAllStudents();
    },
    getStudent: (_, {id}, {dataSources}) => {
        console.log("Searching a specific id student");
        studentAPI = dataSources.studentAPI;
        return studentAPI.getStudent(id);
    }
};