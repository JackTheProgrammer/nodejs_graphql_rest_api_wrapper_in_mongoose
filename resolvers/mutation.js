exports.Mutation = {
    createStudent: (_, {input}, {dataSources}) => {
        const {name, email} = input;
        return dataSources.studentAPI.createStudent(name, email);
    },
    updateStudent: (_, {input}, {dataSources}) => {
        console.log("Update request\n");
        const {id, email} = input;
        return dataSources.studentAPI.updateStudent(id, email);
    },
    deleteStudent: (_, {id}, {dataSources}) => {
        console.log("Delete request....\n");
        return dataSources.studentAPI.deleteStudent(id);
    }
}