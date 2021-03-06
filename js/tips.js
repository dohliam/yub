var tips = [
  {"n":"!", "d":"Type ! before any bare url (e.g., \"google.com\") to go directly to the site"},
  {"n":"calc", "d":"Calculate simple mathematical expressions"},
  {"n":"==", "d":"Use with calc to test the equivalence of two expressions (e.g., \"calc (25+2)==(28-1)\")"},
  {"n":">", "d":"Use with calc to test for the greater of two expressions (e.g., \"calc 8>4\")"},
  {"n":"<", "d":"Use with calc to test for the lesser of two expressions (e.g., \"calc 8<4\")"},
  {"n":"^", "d":"Use with calc for exponents (e.g., \"calc 5^3\")"},
  {"n":"~", "d":"Use with calc to round to the nearest integer (e.g., \"calc ~32.56\")"},
  {"n":"rand ", "d":"Without an argument: returns a random number between 1-100"},
  {"n":"rand <i>number</i>", "d":"With an argument: returns a random number between 1-<i>number</i>"},
  {"n":"whatis", "d":"Type whatis and any command to see a description of what it does"},
  {"n":"where", "d":"Show full search and default URLs for any command"},
  {"n":"search", "d":"Search through all commands for the given string"},
  {"n":"mods", "d":"List all additional personal modules, if any"},
  {"n":"dup", "d":"Check for duplicate entries"},
  {"n":"pop ", "d":"Open YubSearch in a new window"},
  {"n":"pop <i>commands</i>", "d":"Open multiple shortcuts simultaneously in different tabs (e.g., \"pop g y b\")"},
  {"n":"pop <i>commands</i> -t <i>searchterm</i>", "d":"Open multiple searches for <i>searchterm</i> in different tabs (e.g., \"pop gim yim bim -t supernova\")"},
  {"n":"pop -u <i>urls</i>", "d":"Open a list of <i>urls</i> (e.g., \"pop -u http://google.com http://yahoo.com\")"},
  {"n":"tips", "d":"List all available commands"},
  {"n":"ls ", "d":"Same as <b>list</b>"},
  {"n":"ls <i>command</i>", "d":"Same as <b>whatis</b>"},
  {"n":"list", "d":"Show all available shortcuts and commands"},
  {"n":"count", "d":"Show a count of the total number of commands available"},
  {"n":"help", "d":"Same as <b>tips</b>, display this help message"},
  {"n":"s", "d":"Same as <b>search</b>"},
  {"n":"c", "d":"Same as <b>calc</b>"},
  {"n":"w", "d":"Same as <b>whatis</b>"},
  {"n":"wh", "d":"Same as <b>where</b>"},
  {"n":"t", "d":"Same as <b>time</b>"},
  {"n":"day", "d":"Displays the day of the week and the ISO date for the current locale"},
  {"n":"date", "d":"Same as <b>day</b>"},
  {"n":"d", "d":"Same as <b>date</b>"},
  {"n":"link ", "d":"Print the current url"},
  {"n":"link <i>command</i>", "d":"Generate a permalink to the given command"},
  {"n":"href", "d":"Same as <b>link</b>"},
  {"n":"clear", "d":"Clear all output"},
  {"n":"create ", "d":"Create a new command"},
  {"n":"create <i>commandname</i>", "d":"Create a new command called <i>commandname</i>; will alert if command already exists"},
  {"n":"shuffle ", "d":"Shuffle text randomly (default is to delimit by spaces, or tabs if present)"},
  {"n":"shuffle -t <i>delimiter</i>", "d":"Shuffles text randomly using  <i>delimiter</i> to separate entries"},
  {"n":"sort ", "d":"Sorts text (default is to delimit by spaces, or tabs if present)"},
  {"n":"sort -t <i>delimiter</i>", "d":"Sorts text using <i>delimiter</i> to separate entries"},
  {"n":"uniq ", "d":"Sorts text and filters out duplicate entries (default is to delimit by spaces, or tabs if present)"},
  {"n":"uniq -t <i>delimiter</i>", "d":"Sorts text and filters out duplicates using <i>delimiter</i> to separate entries"},
  {"n":"uniqd ", "d":"Finds duplicates in given text (default is to delimit by spaces, or tabs if present)"},
  {"n":"uniqd -t <i>delimiter</i>", "d":"Finds duplicates in given text using <i>delimiter</i> to separate entries"},
  {"n":"wc ", "d":"Counts number of words in given text (default is to delimit by spaces, or tabs if present)"},
  {"n":"wc -c", "d":"Counts number of characters in given text"},
  {"n":"wc -t <i>delimiter</i>", "d":"Counts number of words in given text using <i>delimiter</i> to separate entries"},
  {"n":"ucase", "d":"Converts text to UPPER CASE"},
  {"n":"upcase", "d":"Same as <b>ucase</b>"},
  {"n":"lcase", "d":"Converts text to lower case"},
  {"n":"downcase", "d":"Same as <b>lcase</b>"},
  {"n":"ccase", "d":"Converts text to Capital Case"},
  {"n":"capcase", "d":"Same as <b>ccase</b>"},
  {"n":"caps", "d":"Same as <b>ccase</b>"},
  {"n":"watch", "d":"Watch a playlist of embedded videos based on the given search term"},
  {"n":"ytp", "d":"YouTube Player - Same as <b>watch</b>"},
  {"n":"whoami", "d":"Shows some information about your system"},
  {"n":"rand site", "d":"Go to random site from list of shortcuts"},
  {"n":"rand git", "d":"Go to random GitHub repository"},
  {"n":"rand img", "d":"Go to random image"},
  {"n":"random ", "d":"Same as <b>rand</b>"},
  {"n":"echo ", "d":"Says hello"},
  {"n":"echo <i>string</i>", "d":"Prints the given string"},
  {"n":"timer", "d":"Opens a stopwatch timer"},
  {"n":"stopwatch", "d":"Same as <b>timer</b>"},
  {"n":"sticky ", "d":"An editable sticky note with local storage"},
  {"n":"sticky -r", "d":"Clear sticky local storage"},
  {"n":"sticky <i>message</i>", "d":"Open a new sticky note with the contents of <i>message</i>"},
  {"n":"notepad", "d":"Opens a editable lined notepad with persistent local storage"},
  {"n":"notepad -r", "d":"Clear notepad local storage"},
  {"n":">", "d":"Redirect any command to first Google search result (e.g. > wpde Battle of Hastings)"},
  {"n":"time ", "d":"Print the current local time and date"},
  {"n":"time <i>locale</i>", "d":"Print the current time and date formatted for a specific language or locale"}
];
