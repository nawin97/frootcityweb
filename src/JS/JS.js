function MblMenu() {
  if (document.getElementById("WbMnHldr").getAttribute("class") == "WbMnu") {
    document.getElementById("WbMnHldr").setAttribute("class", "WbMnu MblActv");
    document
      .getElementById("MblMnBtn")
      .setAttribute("class", "MblMenuBtn MblActv");
    document
      .getElementById("MblAcctMnBtn")
      .setAttribute("class", "MblAccounttMnuBtn hide");
    document.getElementById("WbBody").setAttribute("class", "Fxd");
  } else {
    document.getElementById("WbMnHldr").setAttribute("class", "WbMnu");
    document.getElementById("MblMnBtn").setAttribute("class", "MblMenuBtn");
    document
      .getElementById("MblAcctMnBtn")
      .setAttribute("class", "MblAccounttMnuBtn");
    document.getElementById("WbBody").setAttribute("class", "");
  }
  return false;
}

function MblAccMenu() {
  if (
    document.getElementById("WbAccHldr").getAttribute("class") == "WbAccMnu"
  ) {
    document.getElementById("WbAccHldr").setAttribute("class", "WbAccMnu Actv");
    document
      .getElementById("MblAcctMnBtn")
      .setAttribute("class", "MblAccounttMnuBtn MblActv");
    document
      .getElementById("MblMnBtn")
      .setAttribute("class", "MblMenuBtn hide");
    document.getElementById("WbBody").setAttribute("class", "Fxd");
  } else {
    document.getElementById("WbAccHldr").setAttribute("class", "WbAccMnu");
    document
      .getElementById("MblAcctMnBtn")
      .setAttribute("class", "MblAccounttMnuBtn");
    document.getElementById("MblMnBtn").setAttribute("class", "MblMenuBtn");
    document.getElementById("WbBody").setAttribute("class", "");
  }
  return false;
}

function FltrMenu() {
  if (
    document.getElementById("LstngFLtrDv").getAttribute("class") ==
    "col-md-3 FltrDv"
  ) {
    document
      .getElementById("LstngFLtrDv")
      .setAttribute("class", "col-md-3 FltrDv show");
    document
      .getElementById("LstngDv")
      .setAttribute("class", "col-md-9 PrdctLst hide");
    document
      .getElementById("FltrBtn")
      .setAttribute("class", "LstngPgFltrBtn Actv");
  } else {
    document
      .getElementById("LstngFLtrDv")
      .setAttribute("class", "col-md-3 FltrDv");
    document
      .getElementById("LstngDv")
      .setAttribute("class", "col-md-9 PrdctLst");
    document.getElementById("FltrBtn").setAttribute("class", "LstngPgFltrBtn");
  }
  return false;
}

export { FltrMenu, MblAccMenu, MblMenu };
