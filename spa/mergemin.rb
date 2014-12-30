require 'erb'
require 'uglifier'

merge = File.open("index_src.html", "w")
min = File.open("index.html", "w")

# # merge to single-page html file

$nub = File.read("../nub.css")
$commands = File.read("../js/commands.js")
$engines = File.read("../js/engines.js")
$functions = File.read("../js/functions.js")
$mods = File.read("../js/mods.js")
# $shortcuts = File.read("../js/shortcuts.js")
$tips = File.read("../js/tips.js")

content = ERB.new(File.read("template.rhtml")).result

merge << content


# # minify to compressed standalone version

$nub = File.read("../nub.css")
$commands = Uglifier.compile(File.read("../js/commands.js"))
$engines = Uglifier.compile(File.read("../js/engines.js"))
$functions = Uglifier.compile(File.read("../js/functions.js"))
# $mods = Uglifier.compile(File.read("../js/mods.js"))
# $shortcuts = File.read("../js/shortcuts.js")
$tips = Uglifier.compile(File.read("../js/tips.js"))

content = ERB.new(File.read("template.rhtml")).result

min << content
