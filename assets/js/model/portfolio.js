const model_portfolio = {
    name: "portfolio",
    create: {
        item: {
            workExperience: (value) => {
                let datas = model_portfolio.get.item.workExperience();
                value.id = parseInt(datas[datas.length - 1].id) + 1;
                datas.push(value);
                db.set(model_portfolio.name + '_work_experience', datas);
            },
            education: (value) => {
                let datas = model_portfolio.get.item.education();
                value.id = parseInt(datas[datas.length - 1].id) + 1;
                datas.push(value);
                db.set(model_portfolio.name + '_education', datas);
            }
        }
    },
    delete: {
        item: {
            workExperienceById: (id) => {
                let datas = model_portfolio.get.item.workExperience();
                for (let i = 0; i < datas.length; i++) {
                    if (parseInt(datas[i].id) === parseInt(id)) {
                        datas.splice(i, 1);
                        break;
                    }
                }
                db.set(model_portfolio.name + '_work_experience', datas);
            },
            educationById: (id) => {
                let datas = model_portfolio.get.item.education();
                for (let i = 0; i < datas.length; i++) {
                    if (parseInt(datas[i].id) === parseInt(id)) {
                        datas.splice(i, 1);
                        break;
                    }
                }
                db.set(model_portfolio.name + '_education', datas);
            }
        }
    },
    set: {
        item: {
            avatar: (value) => {
                db.set(model_portfolio.name + '_avatar', value);
            },
            fullname: (value) => {
                db.set(model_portfolio.name + '_fullname', value);
            },
            subheading: (value) => {
                db.set(model_portfolio.name + '_subheading', value);
            },
            description: (value) => {
                db.set(model_portfolio.name + '_description', value);
            },
            telp: (value) => {
                let contact = model_portfolio.get.item.contact();
                contact.telp = value;
                db.set(model_portfolio.name + '_contact', contact);
            },
            email: (value) => {
                let contact = model_portfolio.get.item.contact();
                contact.email = value;
                db.set(model_portfolio.name + '_contact', contact);
            },
            website: (value) => {
                let contact = model_portfolio.get.item.contact();
                contact.website = value;
                db.set(model_portfolio.name + '_contact', contact);
            },
            workExperienceById: (id, value) => {
                let datas = model_portfolio.get.item.workExperience();
                for (let i = 0; i < datas.length; i++) {
                    if (parseInt(datas[i].id) === parseInt(id)) {
                        datas[i] = value;
                        break;
                    }
                }
                db.set(model_portfolio.name + '_work_experience', datas);
            },
            educationById: (id, value) => {
                let datas = model_portfolio.get.item.education();
                for (let i = 0; i < datas.length; i++) {
                    if (parseInt(datas[i].id) === parseInt(id)) {
                        datas[i] = value;
                        break;
                    }
                }
                db.set(model_portfolio.name + '_education', datas);
            }
        }
    },
    get: {
        item: {
            avatar: () => {
                return db.get(model_portfolio.name + '_avatar');
            },
            fullname: () => {
                return db.get(model_portfolio.name + '_fullname');
            },
            subheading: () => {
                return db.get(model_portfolio.name + '_subheading');
            },
            description: () => {
                return db.get(model_portfolio.name + '_description');
            },
            contact: () => {
                return db.get(model_portfolio.name + '_contact', true);
            },
            website: () => {
                return db.get(model_portfolio.name + '_contact', true).website;
            },
            email: () => {
                return db.get(model_portfolio.name + '_contact', true).email;
            },
            telp: () => {
                return db.get(model_portfolio.name + '_contact', true).telp;
            },
            workExperienceLastItem: () => {
                let datas = model_portfolio.get.item.workExperience();
                return datas[datas.length - 1];
            },
            workExperienceById: (id) => {
                let item = {};
                let datas = model_portfolio.get.item.workExperience();
                for (let i = 0; i < datas.length; i++) {
                    if (parseInt(datas[i].id) === parseInt(id)) {
                        item = datas[i];
                        break;
                    }
                }
                return item;
            },
            workExperience: () => {
                return db.get(model_portfolio.name + '_work_experience', true);
            },
            qualifications: () => {
                return db.get(model_portfolio.name + '_qualifications');
            },
            educationLastItem: () => {
                let datas = model_portfolio.get.item.education();
                return datas[datas.length - 1];
            },
            educationById: (id) => {
                let item = {};
                let datas = model_portfolio.get.item.education();
                for (let i = 0; i < datas.length; i++) {
                    if (parseInt(datas[i].id) === parseInt(id)) {
                        item = datas[i];
                        break;
                    }
                }
                return item;
            },
            education: () => {
                return db.get(model_portfolio.name + '_education', true);
            },
            interests: () => {
                return db.get(model_portfolio.name + '_interests');
            },
            references: () => {
                return db.get(model_portfolio.name + '_references');
            }
        },
        elements: {
            avatar: () => {
                return model_portfolio.get.item.avatar();
            },
            fullname: () => {
                return model_portfolio.get.item.fullname();
            },
            subheading: () => {
                return model_portfolio.get.item.subheading();
            },
            description: () => {
                return marked(model_portfolio.get.item.description());
            },
            website: () => {
                return `<span class="fas fa-globe"></span>${model_portfolio.get.item.website()}`;
            },
            email: () => {
                return `<span class="fas fa-envelope"></span>${model_portfolio.get.item.email()}`;
            },
            telp: () => {
                return `<span class="fas fa-phone"></span>${model_portfolio.get.item.telp()}`;
            },
            workExperience: () => {
                let output = `
                    <div id="workExperienceItemEditor"></div>
                    <div class="work-experience-item" id="workExperienceItem"></div>
                `;
                let datas = db.get(model_portfolio.name + '_work_experience', true);
                for (let i = datas.length - 1; i >= 0; i--) {
                    let item = datas[i];
                    output += `
                        <div id="workExperienceItemEditor${item.id}"></div>
                        <div class="work-experience-item" id="workExperienceItem${item.id}" 
                            onmouseenter="workExperienceItemOver(${item.id})"
                            onmouseleave="workExperienceItemOut(${item.id})"
                        >
                            <div class="company-name">${htmlEntities(item.companyName)}</div>
                            <h3 class="job-title">
                                <span id="txtJobTitle">${htmlEntities(item.jobTitle)}</span>
                                <span class="date">${htmlEntities(item.date.start)} - ${htmlEntities(item.date.end) || 'Now'}</span>
                            </h3>
                            <div class="other-information">${marked(htmlEntities(item.otherInformation))}</div>
                             <div class="text-right" id="actionBtnWorkExperienceItem${parseInt(item.id)}">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-primary"
                                        onclick="workExperienceShowTextArea(${item.id + ''})" 
                                    >Edit</button>
                                    <button type="button" class="btn btn-danger" id="actionBtnDeleteWorkExperienceItem${item.id}"
                                            onclick="workExperienceItemRemove(${item.id + ''})" 
                                        >Delete</button>
                                    
                                </div>
                            </div>
                        </div><br/>`
                }
                return output;
            },
            qualifications: () => {
                return db.get(model_portfolio.name + '_qualifications');
            },
            education: () => {
                let output = `<div id="educationItemEditor"></div><div class="education-item" id="educationItem"></div>`;
                let datas = db.get(model_portfolio.name + '_education', true);
                for (let i = datas.length - 1; i >= 0; i--) {
                    let item = datas[i];
                    output += `
                        <div id="educationItemEditor${item.id}"></div>
                        <div class="education-item" id="educationItem${item.id}" 
                            onmouseenter="educationItemOver(${item.id})"
                            onmouseleave="educationItemOut(${item.id})"
                        >
                            <div class="institution-name">${htmlEntities(item.institutionName)}</div>
                            <h3 class="course-name">
                                <span id="txtCourseName">${htmlEntities(item.courseName)}</span>
                                <span class="date">${htmlEntities(item.date.start)} - ${htmlEntities(item.date.end) || 'Now'}</span>
                            </h3>
                            <div class="other-information">${marked(htmlEntities(item.otherInformation))}</div>
                             <div class="text-right" id="actionBtnEducationItem${parseInt(item.id)}">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-primary"
                                        onclick="educationShowTextArea(${item.id + ''})" 
                                    >Edit</button>
                                    <button type="button" class="btn btn-danger" id="actionBtnDeleteEducationItem${item.id}"
                                            onclick="educationItemRemove(${item.id + ''})" 
                                        >Delete</button>
                                </div>
                            </div>
                        </div>`
                }
                return output;
            },
            interests: () => {
                return db.get(model_portfolio.name + '_interests');
            },
            references: () => {
                return db.get(model_portfolio.name + '_references');
            }
        }
    },
    data: {
        avatar: "./assets/img/avatar.png?v=" + new Date().getTime(),
        fullname: "Mahbub Zulkarnain",
        subheading: "I'm Fullstack Developer",
        description: "**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        contact: {
            website: "https://mahbubzulkarnain.id",
            email: "prof.bub@live.com",
            telp: "0823-1800-0093"
        },
        /*
        Work Experience Item
        {
            id: "",
            jobTitle: "",
            companyName: "",
            date: {
                start: "",
                end: ""
            },
            otherInformation: ""
        }
        */
        workExperience: [
            {
                id: "1",
                jobTitle: "Android Developer and Web Developer",
                companyName: "MIB Solution, Bandung, Jawa Barat.",
                date: {
                    start: "Feb 2017",
                    end: "Oct 2017"
                },
                otherInformation:
                    "##### Tettot UMKM Mobile\n\n" +
                    "https://play.google.com/store/apps/details?id=com.tettotumkm.mediasosial\n\n" +
                    "**Role** : Main Developer \n\n" +
                    "**Technology** : Android Native JAVA API \n\n\n\n" +
                    "##### Tettot UMKM Website\n\n" +
                    "https://tettotumkm.com\n\n" +
                    "**Role** : Main Developer \n\n" +
                    "**Technology** : PHP Native MySQL JQuery\n\n\n\n" +
                    "##### Tettot OTO Mobile\n\n" +
                    "https://play.google.com/store/apps/details?id=com.tettototo.mediasosial\n\n" +
                    "**Role** : Main Developer \n\n" +
                    "**Technology** : Android Native JAVA API \n\n\n\n" +
                    "##### Tettot OTO Website\n\n" +
                    "https://tettototo.com\n\n" +
                    "**Role** : Main Developer\n\n" +
                    "**Technology** : PHP Native MySQL JQuery\n\n\n\n"
            },
            {
                id: "2",
                jobTitle: "Web Developer",
                companyName: "PT. Smooets Teknologi Outsourcing, Bandung, Jawa Barat.",
                date: {
                    start: "Apr 2018",
                    end: "Nov 2018"
                },
                otherInformation:
                    "##### Redstorm \n" +
                    "\n" +
                    "https://www.redstorm.io\n" +
                    "\n" +
                    "**Role** : Main Developer \n" +
                    "\n" +
                    "**Technology** : NodeJS ExpressJS NginX PM2 MongoDB SocketIO Bootstrap-tokenfield"
            }
        ],
        qualifications: "Qualification",
        /*
        Education Item
        {
            id: "",
            courseName: "",
            institutionName: "",
            date: {
                start: "",
                end: ""
            },
            otherInformation: ""
        }
        */
        education: [
            {
                id: "1",
                courseName: "Ilmu Lorem Ipsum",
                institutionName: "SMA Lorem Ipsum, Bandung, Jawa Barat.",
                date: {
                    start: "Feb 2017",
                    end: "Oct 2017"
                },
                otherInformation: ""
            },
            {
                id: "2",
                courseName: "S1 Teknik Lorem Ipsum",
                institutionName: "Universitas Lorem Ipsum, Bandung, Jawa Barat.",
                date: {
                    start: "Apr 2018",
                    end: "Nov 2018"
                },
                otherInformation: ""
            }
        ],
        interests: "Research, Adventure, and Coffee.",
        references: "References"
    }
};

//init
db.create(model_portfolio.name + '_avatar', model_portfolio.data.avatar);
db.create(model_portfolio.name + '_fullname', model_portfolio.data.fullname);
db.create(model_portfolio.name + '_subheading', model_portfolio.data.subheading);
db.create(model_portfolio.name + '_description', model_portfolio.data.description);
db.create(model_portfolio.name + '_contact', model_portfolio.data.contact);
db.create(model_portfolio.name + '_work_experience', model_portfolio.data.workExperience);
db.create(model_portfolio.name + '_qualifications', model_portfolio.data.qualifications);
db.create(model_portfolio.name + '_education', model_portfolio.data.education);
db.create(model_portfolio.name + '_interests', model_portfolio.data.interests);
db.create(model_portfolio.name + '_references', model_portfolio.data.references);

// localStorage.getItem(model_portfolio.name + '_fullname')

const dbItemFullname = model_portfolio.get.item.fullname();
const dbItemSubheading = localStorage.getItem(model_portfolio.name + '_subheading');
if (typeof dbItemFullname !== 'undefined' && dbItemFullname.length > 0 && typeof dbItemSubheading !== 'undefined' && dbItemSubheading.length > 0) {
    document.title = dbItemFullname.replace(/"/g, '') + ' - ' + dbItemSubheading;
}
