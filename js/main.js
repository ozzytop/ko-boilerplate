
// Defining Model with Observable properties
var myViewModel = {
    personName: ko.observable('Bob'),
    personAge: ko.observable(123),
    numberOfClicks : ko.observable(0),
    incrementClickCounter : function() {
        var previousCount = this.numberOfClicks();
        this.numberOfClicks(previousCount + 1);
    }
};

// Creating a Subscribe, so I can listen changes to the property personName
myViewModel.personName.subscribe(function(newValue) {
    alert("The person's new name is " + newValue);
});

ko.applyBindings(myViewModel, document.getElementById('app'));