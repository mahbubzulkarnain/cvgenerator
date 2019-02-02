function showOnmouseEnter(id, additional = '') {
    try {
        document.getElementById(id).style.display = additional + 'block';
    } catch (e) {
    }
}

function hideOnmouseLeave(id) {
    try {
        document.getElementById(id).style.display = 'none';
    } catch (e) {
    }
}

//fullname
function fullnameShowInput() {
    document.getElementById('actionFullname').style.display = 'none';
    let elem = document.getElementById('wrapperFullname');
    elem.style.width = '100%';
    elem.innerHTML = `
            <div class="form-group">
                <label for="fullname">Fullname</label>
                <input type="text" class="form-control" id="inputFullname" placeholder="Enter fullname" value="${model_portfolio.get.item.fullname()}">
            </div>
            <div class="text-right">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success" onclick="fullnameHideInput(true)">Save</button>
                    <button type="button" class="btn btn-danger" onclick="fullnameHideInput()">Cancel</button>
                </div>
            </div>`;
    try {
        document.getElementById('actionFullname').setAttribute('id', 'actionFullnameShow')
    } catch (e) {

    }

}

function fullnameHideInput(isSave = false) {
    let elem = document.getElementById(`wrapperFullname`);
    elem.style.width = 'unset';
    if (isSave) {
        model_portfolio.set.item.fullname(document.getElementById('inputFullname').value);
    }
    elem.innerHTML = `<h1 id="fullname">${model_portfolio.get.item.fullname()}</h1>`;
    try {
        document.getElementById('actionFullnameShow').setAttribute('id', 'actionFullname')
    } catch (e) {

    }

}

//fullname

//subheading
function subheadingShowInput() {
    document.getElementById('actionSubheading').style.display = 'none';
    let elem = document.getElementById('wrapperSubheading');
    elem.style.width = '100%';
    elem.innerHTML = `
            <div class="form-group">
                <label for="inputSubheading">Subheading</label>
                <input type="text" class="form-control" id="inputSubheading" placeholder="Enter subheading" value="${model_portfolio.get.item.subheading()}">
            </div>
            <div class="text-right">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success" onclick="subheadingHideInput(true)">Save</button>
                    <button type="button" class="btn btn-danger" onclick="subheadingHideInput()">Cancel</button>
                </div>
            </div>`;
    try {
        document.getElementById('actionSubheading').setAttribute('id', 'actionSubheadingShow')
    } catch (e) {

    }

}

function subheadingHideInput(isSave = false) {
    let elem = document.getElementById(`wrapperSubheading`);
    elem.style.width = 'unset';
    if (isSave) {
        model_portfolio.set.item.subheading(document.getElementById('inputSubheading').value);
    }
    elem.innerHTML = `<h3 id="subheading">${model_portfolio.get.item.subheading()}</h3>`;
    try {
        document.getElementById('actionSubheadingShow').setAttribute('id', 'actionSubheading')
    } catch (e) {

    }

}

//subheading

//description
function descriptionShowInput() {
    let elem = document.getElementById('description');
    elem.innerHTML = `
            <div class="form-group">
                <label for="textareaDescription">Description</label>
                <textarea type="text" class="form-control" id="textareaDescription">${model_portfolio.get.item.description()}</textarea>
            </div>
            <div class="text-right">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success" onclick="descriptionHideInput(true)">Save</button>
                    <button type="button" class="btn btn-danger" onclick="descriptionHideInput()">Cancel</button>
                </div>
            </div>
    `;
    let simplemde = new SimpleMDE({element: document.getElementById(`textareaDescription`)});
    simplemde.codemirror.on("change", function () {
        document.getElementById(`textareaDescription`).value = htmlEntities(simplemde.value());
    });
    try {
        document.getElementById('actionDescription').setAttribute('id', 'actionDescriptionShow')
    } catch (e) {

    }
}

function descriptionHideInput(isSave = false) {
    let elem = document.getElementById('description');
    if (isSave) {
        model_portfolio.set.item.description(document.getElementById('textareaDescription').value)
    }
    elem.innerHTML = `
        ${marked(model_portfolio.get.item.description())}
    `;
    try {
        document.getElementById('actionDescriptionShow').setAttribute('id', 'actionDescription')
    } catch (e) {

    }
}

//description

//contact
function telpShowInput() {
    document.getElementById('actionTelp').style.display = 'none';
    let elem = document.getElementById('telp');
    elem.innerHTML = `
            <div class="form-group">
                <label for="inputTelp">Telp</label>
                <input type="text" class="form-control" id="inputTelp" placeholder="Enter telp" value="${model_portfolio.get.item.telp()}">
            </div>
            <div class="text-right">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success" onclick="telpHideInput(true)">Save</button>
                    <button type="button" class="btn btn-danger" onclick="telpHideInput()">Cancel</button>
                </div>
            </div>`;
    try {
        document.getElementById('actionTelp').setAttribute('id', 'actionTelpShow')
    } catch (e) {

    }
}

function telpHideInput(isSave = false) {
    let elem = document.getElementById(`telp`);
    elem.style.width = 'unset';
    if (isSave) {
        model_portfolio.set.item.telp(document.getElementById('inputTelp').value);
    }
    elem.innerHTML = model_portfolio.get.elements.telp();
    try {
        document.getElementById('actionTelpShow').setAttribute('id', 'actionTelp')
    } catch (e) {

    }

}

function emailShowInput() {
    document.getElementById('actionEmail').style.display = 'none';
    let elem = document.getElementById('email');
    elem.innerHTML = `
            <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="text" class="form-control" id="inputEmail" placeholder="Enter email" value="${model_portfolio.get.item.email()}">
            </div>
            <div class="text-right">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success" onclick="emailHideInput(true)">Save</button>
                    <button type="button" class="btn btn-danger" onclick="emailHideInput()">Cancel</button>
                </div>
            </div>`;
    try {
        document.getElementById('actionEmail').setAttribute('id', 'actionEmailShow')
    } catch (e) {

    }
}

function emailHideInput(isSave = false) {
    let elem = document.getElementById(`email`);
    elem.style.width = 'unset';
    if (isSave) {
        model_portfolio.set.item.email(document.getElementById('inputEmail').value);
    }
    elem.innerHTML = model_portfolio.get.elements.email();
    try {
        document.getElementById('actionEmailShow').setAttribute('id', 'actionEmail')
    } catch (e) {

    }

}

function websiteShowInput() {
    document.getElementById('actionWebsite').style.display = 'none';
    let elem = document.getElementById('website');
    elem.innerHTML = `
            <div class="form-group">
                <label for="inputWebsite">Website</label>
                <input type="text" class="form-control" id="inputWebsite" placeholder="Enter website" value="${model_portfolio.get.item.website()}">
            </div>
            <div class="text-right">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success" onclick="websiteHideInput(true)">Save</button>
                    <button type="button" class="btn btn-danger" onclick="websiteHideInput()">Cancel</button>
                </div>
            </div>`;
    try {
        document.getElementById('actionWebsite').setAttribute('id', 'actionWebsiteShow')
    } catch (e) {

    }
}

function websiteHideInput(isSave = false) {
    let elem = document.getElementById(`website`);
    elem.style.width = 'unset';
    if (isSave) {
        model_portfolio.set.item.website(document.getElementById('inputWebsite').value);
    }
    elem.innerHTML = model_portfolio.get.elements.website();
    try {
        document.getElementById('actionWebsiteShow').setAttribute('id', 'actionWebsite')
    } catch (e) {

    }

}

//contact

//work experience
function workExperienceItemOver(id) {
    document.getElementById(`actionBtnWorkExperienceItem${parseInt(id)}`).style.display = "block";

    let elemDelete = document.getElementById(`actionBtnDeleteWorkExperienceItem${(model_portfolio.get.item.workExperience())[0].id}`);
    (model_portfolio.get.item.workExperience().length > 1 ? elemDelete.style.display = 'block' : elemDelete.style.display = 'none');
}

function workExperienceItemOut(id) {
    document.getElementById(`actionBtnWorkExperienceItem${parseInt(id)}`).style.display = "none";
}

function workExperienceItemRemove(id) {
    if (model_portfolio.get.item.workExperience().length > 0) {
        model_portfolio.delete.item.workExperienceById(id);
        document.getElementById(`workExperienceItemEditor${id}`).remove();
        document.getElementById(`workExperienceItem${id}`).remove();
        let datas = model_portfolio.get.item.workExperience();
        if (datas.length === 1) {
            document.getElementById(`actionBtnDeleteWorkExperienceItem${datas[0].id}`).style.display = 'none';
        }
    }
}

function workExperienceShowTextAreaCreate() {
    document.getElementById(`workExperienceItem`).style.display = "none";

    let elem = document.getElementById(`workExperienceItemEditor`);
    elem.innerHTML = ` 
        <div class="form-group">
            <label for="jobTitle">Job Title</label>
            <input type="text" class="form-control" id="jobTitle" placeholder="Enter job title" value="">
        </div>
        <div class="form-group">
            <label for="companyName">Company Name</label>
            <input type="text" class="form-control" id="companyName" placeholder="Enter company name" value="">
        </div>
        <div class="form-group">
            <label>Date</label>
            <div class="row">
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="dateStart" placeholder="Enter start date" value="">
                </div>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="dateEnd" placeholder="Enter end date" value="">
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="otherInformation">Other Information</label>
            <textarea type="text" class="form-control" id="otherInformation"></textarea>
        </div>
        <div class="text-right">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success" onclick="workExperienceHideTextAreaCreate(true)">Save</button>
                <button type="button" class="btn btn-danger" onclick="workExperienceHideTextAreaCreate()">Cancel</button>
            </div>
        </div>`;
    let simplemde = new SimpleMDE({element: document.getElementById(`otherInformation`)});
    simplemde.codemirror.on("change", function () {
        document.getElementById(`otherInformation`).value = htmlEntities(simplemde.value());
    })
}

function workExperienceHideTextAreaCreate(isSave = false) {
    let elem = document.getElementById(`workExperience`);
    if (isSave) {
        model_portfolio.create.item.workExperience({
            jobTitle: document.getElementById(`jobTitle`).value,
            companyName: document.getElementById(`companyName`).value,
            date: {
                start: document.getElementById(`dateStart`).value,
                end: document.getElementById(`dateEnd`).value
            },
            otherInformation: document.getElementById(`otherInformation`).value
        });
        let item = model_portfolio.get.item.workExperienceLastItem();
        if (item) {
            document.getElementById(`workExperienceItem`).remove();
            document.getElementById(`workExperienceItemEditor`).remove();
            let newItem = document.createElement('div');
            newItem.setAttribute('id', `workExperienceItem${item.id}`);
            newItem.setAttribute('onmouseenter', `workExperienceItemOver(${item.id})`);
            newItem.setAttribute('onmouseleave', `workExperienceItemOut(${item.id})`);
            newItem.innerHTML = `
                <div class="company-name">${htmlEntities(item.companyName || '')}</div>
                    <h3 class="job-title">
                        <span id="txtJobTitle">${htmlEntities(item.jobTitle || '')}</span>
                        <span class="date">${htmlEntities(item.date && item.date.start ? item.date.start : '')} - ${htmlEntities(item.date && item.date.end ? item.date.end : 'Now')}</span>
                    </h3>
                    <div class="other-information">${marked(htmlEntities(item.otherInformation || ''))}</div>
                    <div class="text-right" id="actionBtnWorkExperienceItem${parseInt(item.id) || ''}">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary"
                                onclick="workExperienceShowTextArea(${item.id + '' || ''})" 
                            >Edit</button>
                <button type="button" class="btn btn-danger" id="actionBtnDeleteWorkExperienceItem${item.id}"
                                onclick="workExperienceItemRemove(${item.id + '' || ''})" 
                            >Delete</button>
                        </div>
                    </div>`;
            elem.prepend(newItem);

            let newItemEditor = document.createElement('div');
            newItemEditor.setAttribute('id', `workExperienceItemEditor${item.id}`);
            elem.prepend(newItemEditor);

            newItem = document.createElement('div');
            newItem.setAttribute('id', 'workExperienceItem');
            newItem.setAttribute('class', 'work-experience-item');
            elem.prepend(newItem);

            newItemEditor = document.createElement('div');
            newItemEditor.setAttribute('id', 'workExperienceItemEditor');
            elem.prepend(newItemEditor);
        }
    } else {
        document.getElementById(`workExperienceItemEditor`).innerHTML = '';
    }
}


function workExperienceShowTextArea(id) {
    id = parseInt(id);
    document.getElementById(`workExperienceItem${id}`).style.display = "none";
    let item = model_portfolio.get.item.workExperienceById(id);

    let elem = document.getElementById(`workExperienceItemEditor${id}`);
    elem.innerHTML = ` 
        <div class="form-group">
            <label for="jobTitle">Job Title</label>
            <input type="text" class="form-control" id="jobTitle${id}" placeholder="Enter job title" value="${item.jobTitle || ''}">
        </div>
        <div class="form-group">
            <label for="companyName">Company Name</label>
            <input type="text" class="form-control" id="companyName${id}" placeholder="Enter company name" value="${item.companyName || ''}">
        </div>
        <div class="form-group">
            <label>Date</label>
            <div class="row">
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="dateStart${id}" placeholder="Enter start date" value="${item.date && item.date.start ? item.date.start : ''}">
                </div>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="dateEnd${id}" placeholder="Enter end date" value="${item.date && item.date.end ? item.date.end : 'Now'}">
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="otherInformation">Other Information</label>
            <textarea type="text" class="form-control" id="otherInformation${id}">${item.otherInformation || ''}</textarea>
        </div>
        <div class="text-right">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success" onclick="workExperienceHideTextArea(${id + '' || ''}, true)">Save</button>
                <button type="button" class="btn btn-danger" onclick="workExperienceHideTextArea(${id + '' || ''})">Cancel</button>
            </div>
        </div>`;
    let simplemde = new SimpleMDE({element: document.getElementById(`otherInformation${id}`)});
    simplemde.codemirror.on("change", function () {
        document.getElementById(`otherInformation${id}`).value = htmlEntities(simplemde.value());
    })
}

function workExperienceHideTextArea(id, isSave = false) {
    let elem = document.getElementById(`workExperienceItem${id}`);
    if (isSave) {
        model_portfolio.set.item.workExperienceById(id, {
            id: id.toString(),
            jobTitle: document.getElementById(`jobTitle${id}`).value,
            companyName: document.getElementById(`companyName${id}`).value,
            date: {
                start: document.getElementById(`dateStart${id}`).value,
                end: document.getElementById(`dateEnd${id}`).value
            },
            otherInformation: document.getElementById(`otherInformation${id}`).value
        })
    }
    let item = model_portfolio.get.item.workExperienceById(id);
    if (item) {
        elem.innerHTML = `
                    <div class="company-name">${htmlEntities(item.companyName || '')}</div>
                    <h3 class="job-title">
                        <span id="txtJobTitle">${htmlEntities(item.jobTitle || '')}</span>
                        <span class="date">${htmlEntities(item.date && item.date.start ? item.date.start : '')} - ${htmlEntities(item.date && item.date.end ? item.date.end : 'Now')}</span>
                    </h3>
                    <div class="other-information">${marked(htmlEntities(item.otherInformation || ''))}</div>
                    <div class="text-right" id="actionBtnWorkExperienceItem${parseInt(id) || ''}">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary"
                                onclick="workExperienceShowTextArea(${id + '' || ''})" 
                            >Edit</button>
                            <button type="button" class="btn btn-danger" id="actionBtnDeleteWorkExperienceItem${id}"
                                onclick="workExperienceItemRemove(${id + '' || ''})" 
                            >Delete</button>
                        </div>
                    </div>`
    }
    elem.style.display = 'block';
    document.getElementById(`workExperienceItemEditor${id}`).innerHTML = '';
}

//work experience

//education
function educationItemOver(id) {
    document.getElementById(`actionBtnEducationItem${parseInt(id)}`).style.display = "block";

    let elemDelete = document.getElementById(`actionBtnDeleteEducationItem${(model_portfolio.get.item.education())[0].id}`);
    (model_portfolio.get.item.education().length > 1 ? elemDelete.style.display = 'block' : elemDelete.style.display = 'none');
}

function educationItemOut(id) {
    document.getElementById(`actionBtnEducationItem${parseInt(id)}`).style.display = "none";
}

function educationItemRemove(id) {
    if (model_portfolio.get.item.education().length > 0) {
        model_portfolio.delete.item.educationById(id);
        document.getElementById(`educationItemEditor${id}`).remove();
        document.getElementById(`educationItem${id}`).remove();
        let datas = model_portfolio.get.item.education();
        if (datas.length === 1) {
            document.getElementById(`actionBtnDeleteEducationItem${datas[0].id}`).style.display = 'none';
        }
    }
}

function educationShowTextAreaCreate() {
    document.getElementById(`educationItem`).style.display = "none";

    let elem = document.getElementById(`educationItemEditor`);
    elem.innerHTML = ` 
        <div class="form-group">
            <label for="courseName">Course Name</label>
            <input type="text" class="form-control" id="courseName" placeholder="Enter course name" value="">
        </div>
        <div class="form-group">
            <label for="institutionName">Institution Name</label>
            <input type="text" class="form-control" id="institutionName" placeholder="Enter institution name" value="">
        </div>
        <div class="form-group">
            <label>Date</label>
            <div class="row">
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="dateStart" placeholder="Enter start date" value="">
                </div>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="dateEnd" placeholder="Enter end date" value="">
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="otherInformation">Other Information</label>
            <textarea type="text" class="form-control" id="otherInformation"></textarea>
        </div>
        <div class="text-right">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success" onclick="educationHideTextAreaCreate(true)">Save</button>
                <button type="button" class="btn btn-danger" onclick="educationHideTextAreaCreate()">Cancel</button>
            </div>
        </div>`;
    let simplemde = new SimpleMDE({element: document.getElementById(`otherInformation`)});
    simplemde.codemirror.on("change", function () {
        document.getElementById(`otherInformation`).value = htmlEntities(simplemde.value());
    })
}

function educationHideTextAreaCreate(isSave = false) {
    let elem = document.getElementById(`education`);
    if (isSave) {
        model_portfolio.create.item.education({
            courseName: document.getElementById(`courseName`).value,
            institutionName: document.getElementById(`institutionName`).value,
            date: {
                start: document.getElementById(`dateStart`).value,
                end: document.getElementById(`dateEnd`).value
            },
            otherInformation: document.getElementById(`otherInformation`).value
        });
        let item = model_portfolio.get.item.educationLastItem();
        if (item) {
            document.getElementById(`educationItem`).remove();
            document.getElementById(`educationItemEditor`).remove();
            let newItem = document.createElement('div');
            newItem.setAttribute('id', `educationItem${item.id}`);
            newItem.setAttribute('onmouseenter', `educationItemOver(${item.id})`);
            newItem.setAttribute('onmouseleave', `educationItemOut(${item.id})`);
            newItem.innerHTML = `
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
                </div>`;
            elem.prepend(newItem);

            let newItemEditor = document.createElement('div');
            newItemEditor.setAttribute('id', `educationItemEditor${item.id}`);
            elem.prepend(newItemEditor);

            newItem = document.createElement('div');
            newItem.setAttribute('id', 'educationItem');
            newItem.setAttribute('class', 'education-item');
            elem.prepend(newItem);

            newItemEditor = document.createElement('div');
            newItemEditor.setAttribute('id', 'educationItemEditor');
            elem.prepend(newItemEditor);
        }
    } else {
        document.getElementById(`educationItemEditor`).innerHTML = '';
    }
}

function educationShowTextArea(id) {
    id = parseInt(id);
    document.getElementById(`educationItem${id}`).style.display = "none";
    let item = model_portfolio.get.item.educationById(id);

    let elem = document.getElementById(`educationItemEditor${id}`);
    elem.innerHTML = ` 
        <div class="form-group">
            <label for="courseName${id}">Course Name</label>
            <input type="text" class="form-control" id="courseName${id}" placeholder="Enter course name" value="${item.courseName || ''}">
        </div>
        <div class="form-group">
            <label for="institutionName${id}">Institution Name</label>
            <input type="text" class="form-control" id="institutionName${id}" placeholder="Enter institution name" value="${item.institutionName || ''}">
        </div>
        <div class="form-group">
            <label>Date</label>
            <div class="row">
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="dateStart${id}" placeholder="Enter start date" value="${item.date.start || ''}">
                </div>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="dateEnd${id}" placeholder="Enter end date" value="${item.date.end || 'Now'}">
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="otherInformation">Other Information</label>
            <textarea type="text" class="form-control" id="otherInformation${id}">${item.otherInformation || ''}</textarea>
        </div>
        <div class="text-right">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success" onclick="educationHideTextArea(${id + ''}, true)">Save</button>
                <button type="button" class="btn btn-danger" onclick="educationHideTextArea(${id + ''})">Cancel</button>
            </div>
        </div>`;
    let simplemde = new SimpleMDE({element: document.getElementById(`otherInformation${id}`)});
    simplemde.codemirror.on("change", function () {
        document.getElementById(`otherInformation${id}`).value = htmlEntities(simplemde.value());
    })
}

function educationHideTextArea(id, isSave = false) {
    let elem = document.getElementById(`educationItem${id}`);
    if (isSave) {
        model_portfolio.set.item.educationById(id, {
            id: id.toString(),
            courseName: document.getElementById(`courseName${id}`).value,
            institutionName: document.getElementById(`institutionName${id}`).value,
            date: {
                start: document.getElementById(`dateStart${id}`).value,
                end: document.getElementById(`dateEnd${id}`).value
            },
            otherInformation: document.getElementById(`otherInformation${id}`).value
        })
    }
    let item = model_portfolio.get.item.educationById(id);
    if (item) {
        elem.innerHTML = `
                    <div class="institution-name">${htmlEntities(item.institutionName)}</div>
                    <h3 class="course-name">
                        <span id="txtCourseName">${htmlEntities(item.courseName)}</span>
                        <span class="date">${htmlEntities(item.date.start)} - ${htmlEntities(item.date.end) || 'Now'}</span>
                    </h3>
                    <div class="other-information">${marked(htmlEntities(item.otherInformation))}</div>
                    <div class="text-right" id="actionBtnEducationItem${parseInt(id)}">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary"
                                onclick="educationShowTextArea(${id + ''})" 
                            >Edit</button>
                            <button type="button" class="btn btn-danger" id="actionBtnDeleteEducationItem${id}"
                                            onclick="educationItemRemove(${id + ''})" 
                                        >Delete</button>
                        </div>
                    </div>`
    }
    elem.style.display = 'block';
    document.getElementById(`educationItemEditor${id}`).innerHTML = '';
}

//education
