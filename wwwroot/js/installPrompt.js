let installPrompt = null;
let complete = false;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    console.log("install Prompt");
    const timeoutId = setTimeout(function(){
        var installButton = document.getElementById("install");
        if(installButton !== null){
            installButton.removeAttribute("hidden");
            installButton.addEventListener("click", async () => {
                if (!installPrompt) {
                    return;
                }
                const result = await installPrompt.prompt();
                console.log(`Install prompt was: ${result.outcome}`);
                installPrompt = null;
                installButton.setAttribute("hidden", "");
            });
            complete = true;
        }{
            console.log("Install button not found");
        }
    }, 3000);
    if(complete){
        clearTimeout(timeoutId);
    }
});


