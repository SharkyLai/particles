function updateDefaultTab() {
    if (opts.defaultTab == "Particles") {
        tab("Generators");
        opts.defaultTab = "Generators"
    } else if (opts.defaultTab == "Generators") {
        tab("Particles");
        opts.defaultTab = "Particles";
    }
}

function updateTheme(theme) {
    opts.selectedTheme = theme.toString();
    if (theme == Dark) {
        //
    } else if (theme == Aqua) {
        // 
    } else if (theme == Normal) {
        //
    }
}