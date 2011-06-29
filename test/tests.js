
// documentation on writing tests here: http://github.com/DouglasMeyer/test_it

// below are some general tests but feel free to delete them.

TestIt("example tests", {
  "HTML5 Boilerplate is sweet": function(t){
    t.assertEqual("sweet", "boilerplate".replace("boilerplate", "sweet"),
      "Yes. HTML5 Boilerplate is, in fact, sweet");
  },
  "from plugins.js": {
    "Environment is good": function(t){
      t.assert( !!window.log, "log function present");

      var history = log.history && log.history.length || 0;
      log("logging from the test suite.")
      t.assertEqual( 1, log.history.length - history, "log history keeps track" )

      t.assert( !!window.Modernizr, "Modernizr global is present")
    }
  }
});

