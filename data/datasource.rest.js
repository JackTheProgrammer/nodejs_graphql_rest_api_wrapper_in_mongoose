const { RESTDataSource } = require("apollo-datasource-rest")

class StudentRestAPI extends RESTDataSource {
    constructor(){
        super();
        this.apiBaseUrl = "http://localhost:8080";
    }

    /**
     * @typedef {object} Student
     * @property {string} _id
     * @property {string} name
     * @property {string} email
     * @property {string} dateOfCreation
     *
     * @returns {Student[] | []}
     */
    async getAllStudents(){
        let response = this.get(`${this.apiBaseUrl}/students`);
        return response;
    }

    /**
     * @param {string} id
     * @returns {Student}
     */
    async getStudent(id){
        let response = await this.get(`${this.apiBaseUrl}/students/search-student/${id}`);
        return response;
    }

    /**
     * @param {string} name
     * @param {string} email
     *
     * @returns {Student}
     */
    async createStudent(name, email){
        let response = await this.post(
            `${this.apiBaseUrl}/students/create-student`,{
                name: name,
                email: email
            }
        );
        return response;
    }

    /**
     * @param {string} id
     * @param {string} email
     *
     * @returns {Student}
     */
    async updateStudent(id, email){
        let response = await this.put(
            `${this.apiBaseUrl}/students/update-student/${id}`,{
                email: email
            }
        );
        return response;
    }

    /**
     * @param {string} id
     * @returns {string}
     */
    async deleteStudent(id) {
        await this.delete(`${this.apiBaseUrl}/students/remove-student/${id}`);
        return `Deleted ${id}`;
    }
}

module.exports = StudentRestAPI;