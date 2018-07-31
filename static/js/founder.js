//for editing the top of the page -- the logo, name, description, email and site
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("modifyGeneralInfo").classList.add('hide');
    document.getElementById("modifyProgress").classList.add('hide')

});
    //functions for editing General Info
        function changeGeneralEditable() {
            document.getElementById("name").contentEditable = "true";
            document.getElementById("description").contentEditable = "true";
            document.getElementById("email").contentEditable = "true";
            document.getElementById("site").contentEditable = "true";

            document.getElementById("modifyGeneralInfo").classList.remove('hide');

        }

       function saveGeneralEdits() {

            document.getElementById("name").contentEditable = "false";
            document.getElementById("description").contentEditable = "false";
            document.getElementById("email").contentEditable = "false";
            document.getElementById("site").contentEditable = "false";
            document.getElementById("modifyGeneralInfo").classList.add('hide');

            //get the editable element
            let nameElem = document.getElementById("name");
            let descriptionElem = document.getElementById("description");
            let emailElem = document.getElementById("email");
            let siteElem = document.getElementById("site");

            //get the edited element content
            let newName = nameElem.innerHTML;
            let newDescription = descriptionElem.innerHTML;
            let newEmail = emailElem.innerHTML;
            let newSite = siteElem.innerHTML;
            document.getElementById("currentName").innerHTML = newName;
            document.getElementById("currentDescription").innerHTML = newDescription;
            document.getElementById("currentEmail").innerHTML = newEmail;
            document.getElementById("currentSite").innerHTML = newSite;

            //save the content to local storage
            localStorage.name = newName;
            localStorage.description = newDescription;
            localStorage.email = newEmail;
            localStorage.site = newSite

        }

        let i;
        let content = "";

        //functions for editing Progress
        function changeProgressEditable() {

            document.getElementById("fundingStatus").contentEditable = "true";
            document.getElementById("accelerators").contentEditable = "true";
            document.getElementById("agreements").contentEditable = "true";
            document.getElementById("patents").contentEditable = "true";
            document.getElementById("applications").contentEditable = "true";
            document.getElementById("partnerships").contentEditable = "true";


            document.getElementById("modifyProgress").classList.remove('hide')

        }
        function saveProgressEdits() {
            document.getElementById("fundingStatus").contentEditable = "false";
            document.getElementById("accelerators").contentEditable = "false";
            document.getElementById("agreements").contentEditable = "false";
            document.getElementById("patents").contentEditable = "false";
            document.getElementById("applications").contentEditable = "false";
            document.getElementById("partnerships").contentEditable = "false";
            document.getElementById("modifyProgress").classList.add('hide');

            //get the editable element
            let statusElem = document.getElementById("fundingStatus");
            let acceleratorElem = document.getElementById("accelerators");
            let agreementElem = document.getElementById("agreements");
            let patentElem = document.getElementById("patents");
            let applicationElem = document.getElementById("applications");
            let partnershipElem = document.getElementById("partnerships");

            //get the edited element content
            let updateStatus = statusElem.innerHTML;
            let updateAccelerator = acceleratorElem.innerHTML;
            let updateAgreement= agreementElem.innerHTML;
            let updatePatent = patentElem.innerHTML;
            let updateApplication = applicationElem.innerHTML;
            let updatePartnership = partnershipElem.innerHTML;

            document.getElementById("currentStatus").innerHTML = updateStatus;
            document.getElementById("currentAccelerators").innerHTML = updateAccelerator;
            document.getElementById("currentAgreements").innerHTML = updateAgreement;
            document.getElementById("currentPatents").innerHTML = updatePatent;
            document.getElementById("currentApplications").innerHTML = updateApplication;
            document.getElementById("currentPartnerships").innerHTML = updatePartnership;

            //save the content to local storage
            localStorage.status = updateStatus;
            localStorage.accelerator = updateAccelerator;
            localStorage.agreement = updateAgreement;
            localStorage.patent = updatePatent;
            localStorage.application = updateApplication;
            localStorage.partnership = updatePartnership;

        }

        //functions for the Accelerator
        function acceleratorArray() {
            let existing = localStorage.getItem('accelerator');
            existing = existing ? existing.split(',') : [];

            return existing;
        }

        function addAccelerator() {

            let accelerators = acceleratorArray();

            let newAccelerator = prompt("Where is this new accelerator?");
            accelerators.push(newAccelerator);
            localStorage.setItem('accelerator', accelerators.toString());
            document.getElementById("accelerators").innerHTML = printAccelerators();

        }

        /*function removeAccelerator() {
            document.getElementById("accelerators").contentEditable = "false"
            var accelerators = acceleratorArray();;
            var content = "";
            var i
             for(i = 0; i < accelerators.length; i++) {
                 content += accelerators[i] + "<input type='button' value='-' onclick=\"modify()\"/><br>";
             }

             console.log(content);
        }

        function modify() {
             var accelerators = acceleratorArray();

             var pos = accelerators.indexOf("")
             accelerators.splice(pos,1);

             localStorage.setItem('accelerator', accelerators.toString());
             document.getElementById("accelerators").innerHTML = printAccelerators();

             removeAccelerator();
        }*/

        function printAccelerators(){
            let accelerators = acceleratorArray();
            content = "";       //clear it first

            for(i = 0; i < accelerators.length; i++){
                content += accelerators[i] + "<br>";
            }

            return content;
        }

        //functions for the Agreements
        function agreementArray() {
            let existing = localStorage.getItem('agreement');
            existing = existing ? existing.split(',') : [];

            return existing;
        }

        function addAgreement() {

            let agreements = agreementArray();

            let newAgreement = prompt("Who is this agreement with?");
            agreements.push(newAgreement);

            localStorage.setItem('agreement', agreements.toString());
            document.getElementById("agreements").innerHTML = printAgreements();

        }

        function printAgreements(){
            let agreements = agreementArray();
            content = "";       //clear it first

            for(i = 0; i < agreements.length; i++){
                content += agreements[i] + "<br>";
            }

            return content;
        }

        //functions for patents
        function patentArray() {
            let existing = localStorage.getItem('patent');
            existing = existing ? existing.split(',') : [];

            return existing;
        }

        function addPatent() {

            let patents = patentArray();

            let newPatent = prompt("Who is this patent with?");
            patents.push(newPatent);
            let newPatentStatus = prompt("What is the status of this patent?");
            patents.push(newPatentStatus);

            localStorage.setItem('patent', patents.toString());
            document.getElementById("patents").innerHTML = printPatents();

        }

        function printPatents(){
            let patents = patentArray();
            content = "";       //clear it first

            for(i = 0; i < patents.length; i++){
                content += patents[i] + "<br>";
            }

            return content;
        }

        //functions for applications
        function applicationArray() {
            let existing = localStorage.getItem('application');
            existing = existing ? existing.split(',') : [];

            return existing;
        }

        function addApplication() {

            let applications = applicationArray();

            let newApplication = prompt("What is this funding application for?");
            applications.push(newApplication);
            let newApplicationFunding = prompt("How much funding will this application provide?");
            applications.push(newApplicationFunding);

            localStorage.setItem('application', applications.toString());
            document.getElementById("applications").innerHTML = printApplication();

        }

        function printApplication(){
            let applications = applicationArray();
            content = "";       //clear it first

            for(i = 0; i < applications.length; i++){
                content += applications[i] + "<br>";
            }

            return content;
        }

        //functions for partnerships
        function partnershipArray() {
            let existing = localStorage.getItem('partnership');
            existing = existing ? existing.split(',') : [];

            return existing;
        }

        function addPartnership() {

            let partnerships = partnershipArray();

            let newPartnership = prompt("Who is this partnership with?");
            partnerships.push(newPartnership);
            let newPartnershipStatus = prompt("What is the status of this partnership?");
            partnerships.push(newPartnershipStatus);

            localStorage.setItem('partnership', partnerships.toString());
            document.getElementById("partnerships").innerHTML = printPartnerships();

        }

        function printPartnerships(){
            let partnerships = partnershipArray();
            content = "";       //clear it first

            for(i = 0; i < partnerships.length; i++){
                content += partnerships[i] + "<br>";
            }

            return content;
        }

        // Saving all edits
        function checkEdits() {

            //find out if the user has previously saved edits
            if (localStorage != null) {
                document.getElementById("name").innerHTML = localStorage.name;
                document.getElementById("currentName").innerHTML = localStorage.name;
                document.getElementById("description").innerHTML = localStorage.description;
                document.getElementById("currentDescription").innerHTML = localStorage.description;
                document.getElementById("email").innerHTML = localStorage.email;
                document.getElementById("currentEmail").innerHTML = localStorage.email;
                document.getElementById("site").innerHTML = localStorage.site;
                document.getElementById("currentSite").innerHTML = localStorage.site;

                document.getElementById("fundingStatus").innerHTML = localStorage.status;
                document.getElementById("currentStatus").innerHTML = localStorage.status;
                document.getElementById("accelerators").innerHTML = localStorage.accelerator;
                document.getElementById("currentAccelerators").innerHTML = localStorage.accelerator;
                document.getElementById("agreements").innerHTML = localStorage.agreement;
                document.getElementById("currentAgreements").innerHTML = localStorage.agreement;
                document.getElementById("patents").innerHTML = localStorage.patent;
                document.getElementById("currentPatents").innerHTML = localStorage.patent;
                document.getElementById("applications").innerHTML = localStorage.application;
                document.getElementById("currentApplications").innerHTML = localStorage.application;
                document.getElementById("partnerships").innerHTML = localStorage.partnership;
                document.getElementById("currentPartnerships").innerHTML = localStorage.partnership;
            }
        }
