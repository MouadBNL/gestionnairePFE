import{A as i}from"./AbstractApiService.js";class h extends i{constructor(){super("")}getProfile(){return this.http.get("/profile").then(this.handleResponse.bind(this)).catch(this.handleError.bind(this))}update(t){return this.http.put("/profile",t).then(this.handleResponse.bind(this)).catch(this.handleError.bind(this))}getAllStudents(){return this.http.get("students").then(this.handleResponse.bind(this)).catch(this.handleError.bind(this))}getStudent(t){return this.http.get("students/"+t).then(this.handleResponse.bind(this)).catch(this.handleError.bind(this))}invite(t){return this.http.post("/invite/"+t).catch(this.handleError.bind(this))}uploadFile(t,e){return this.http.post("/profile/"+t,e).catch(this.handleError.bind(this))}}function r(){return new h}export{r as u};
