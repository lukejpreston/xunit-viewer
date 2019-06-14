# TODO

menu
    a. wire up the values
    b. get search working
    c. make buttons work
    d. be able to add/remove files
    e. make drag 'n' drop work

The script

* Do a build, replace links and styles to inline them. This gets storred in the npm package
* Add a <script> window.files = {{files}}</script> to the file
* use handlebars to replace the above, default to var files = []
* use handlebars to replace the meta data, this then can mean you can do some stuff with slack

should be able to either use `XunitViewer({}).run()`

should be able to use the components so you can embed on your own webpage, if that is something you really want to do

websockets should be a lot easier, basically whenever the files change I just submit a new on-change which returns files