let installPrompt = null;
let complete = false;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    const timeoutId = setTimeout(function(){
        var installDiv = document.getElementById("installDiv");
        var installButton = document.getElementById("installButton");
        
        if(installButton !== null){
            installDiv.removeAttribute("hidden");
            installButton.addEventListener("click", async () => {
                if (!installPrompt) {
                    return;
                }
                const result = await installPrompt.prompt();
                console.log(`Install prompt was: ${result.outcome}`);
                installPrompt = null;
                installDiv.setAttribute("hidden", "");
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


