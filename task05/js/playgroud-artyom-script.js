window.addEventListener("load", function() {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });

    var noCommandMatched = "NOT_COMMAND_MATCHED";
    artyom.when(noCommandMatched, function() {
        artyom.say("Dazu habe ich leider keine Antwort.");
        document.getElementById('sagen').innerHTML = "Dazu habe ich leider keine Antwort.";
    });

    artyom.addCommands({
        indexes: ["um wie viel Uhr ist *"],
        smart: true,
        action: function(i, wildcard) {
            artyom.say("Deine Vorlesung " + wildcard + " ist heute um 9 Uhr");
            document.getElementById('sagen').innerHTML = "Deine Vorlesung " + wildcard + " ist heute um 9 Uhr";
        }
    });

    artyom.addCommands([{
            indexes: ["Moin Emma", "Moin", "Hallo", "Hallo Emma"],
            action: function(i) {
                console.log("Hallo Luci")
                document.getElementById('sagen').innerHTML = "Hallo Luci";
                artyom.say("Hallo Luci");
            }
        },
        {
            indexes: ["Was steht heute an"],
            action: function(i) {
                consolelog("Möchtest du deine Termine aus dem Uni Kalender wissen?");
                documentgetElementById('sagen').innerHTML = "Möchtest du deine Termine aus dem Uni Kalender wissen?";
                artyom.say("Möchtest du deine Termine aus dem Uni Kalender wissen?");
            }
        },
        {
            indexes: ["Ja"],
            action: function(i) {
                console.log("In 20 Minuten hast du Streaming Anwendungen.");
                document.getElementById('sagen').innerHTML = "In 20 Min.hast du Streaming Anwendungen.";
                artyom.say("In 20 Minuten hast du Streaming Anwendungen.");
            }
        },
        {
            indexes: ["Muss ich für * noch etwas vorbereiten"],
            action: function(i) {
                console.log("Ja, es wäre nicht schlecht, wenn du dir nochmal die Folien von letzter Woche anschaust.");
                document.getElementById('sagen').innerHTML = "Ja, es wäre nicht schlecht, wenn du dir nochmal die Folien von letzter Woche anschaust";
                artyom.say("Ja, es wäre nicht schlecht, wenn du dir nochmal die Folien von letzter Woche anschaust.");
            }
        },
        {
            indexes: ["Was habe ich heute sonst noch für Termine"],
            action: function(i) {
                console.log("Um 14:00 Uhr hast du noch einen Projekt Call.");
                document.getElementById('sagen').innerHTML = "Um 14:00 Uhr hast du noch einen Projekt Call.";
                artyom.say("Um 14:00 Uhr hast du noch einen Projekt Call.");
            }
        },
        {
            indexes: ["Kannst du mir einen Timer in * Minuten stellen"],
            action: function(i) {
                console.log("Ich habe für " + wildcard + "Minuten einen Timer gestellt. Kann ich sonst noch was für dich tun.");
                document.getElementById('sagen').innerHTML = "Ich habe für " + wildcard + "Minuten einen Timer gestellt. Kann ich sonst noch was für dich tun.";
                artyom.say("Ich habe für " + wildcard + "Minuten einen Timer gestellt. Kann ich sonst noch was für dich tun.");
            }
        },
        {
            indexes: ["Was gibt es heute in der Mensa zu essen"],
            action: function(i) {
                console.log("Menü 1 ist Gemüselasagne. Menü 2 ist Pommes mit Schnitzel.");
                document.getElementById('sagen').innerHTML = "Menü 1 ist Gemüselasagne. Menü 2 ist Pommes mit Schnitzel.";
                artyom.say("Menü 1 ist Gemüselasagne. Menü 2 ist Pommes mit Schnitzel.");
            }
        },
        {
            indexes: ["Kannst du in der Whatsapp Gruppe fragen ob wer mit in die Mensa kommt"],
            action: function(i) {
                console.log("Erledigt!");
                document.getElementById('sagen').innerHTML = "Erledigt!";
                artyom.say("Erledigt!");
            }
        },
        {
            indexes: ["Danke"],
            action: function(i) {
                console.log("Gerne, wenn noch was ist dann meldest du dich einfach.");
                document.getElementById('sagen').innerHTML = "Gerne, wenn noch was ist dann meldest du dich einfach.";
                artyom.say("Gerne, wenn noch was ist dann meldest du dich einfach.");
            }
        },


    ]);

    artyom.redirectRecognizedTextOutput(function(text, isFinal) {
        var span = document.getElementById('output');
        span.innerHTML = text;

    });


    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function() {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function() {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});

//# sourceMappingURL=playgroud-artyom-script.js.map