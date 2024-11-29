app.LoadPlugin( "UIExtras" )
app.LoadPlugin( "Utils" )

class Main extends App
{
    onStart()
    {
        // Create a full screen layout.
        this.main = ui.addLayout( "main", "Linear", "Top,FillXY" )
        this.main.setChildMargins(0, 0, 0, "20px")
        
        // add an appbar
        this.apb = ui.addAppBar( this.main, "Remote Control", "menu" )
				ui.setThemeColor(prompt("Enter a color:", "#cade34"));
        // some appbar icons
        //this.search = ui.addButton(this.apb.layout, "search", "icon")
        this.more = ui.addButton(this.apb.layout, "more_vert", "icon")

        this.main2 = ui.addLayout(this.main, "main2", "Linear", "Horizontal,FillXY" )
        this.main2.setChildMargins(0.005, 0, 0, 0)
        
        this.main3 = ui.addLayout(this.main, "main3", "Linear", "Horizontal,FillXY" )
        this.main3.setChildMargins(0,0, 0.005, 0)

        // some text control
        //ui.addText(this.main2, "This is a text control.")
// toggle dark and light theme
        this.btn1 = ui.addButton(this.main2, "Back", "Primary", 0.25, 0.82);
        this.btn1.setCommand = "PowerOff"
        this.btn1.setOnTouch( this.button1Clicked )

        // change primary color
        this.btn2= ui.addButton(this.main2, "Home", "Primary", 0.25, 0.82)
        this.btn2.setCommand = "PowerOn"
        this.btn2.setOnTouch( this.button2Clicked)

      
        // toggle dark and light theme
        this.btn3 = ui.addButton(this.main2, "Speak", "Primary", 0.25, 0.82);
        this.btn3.setCommand = "VolumeDown"
        this.btn3.setOnTouch( this.button3Clicked )

        // change primary color
        this.btn4= ui.addButton(this.main2, "Power", "Primary", 0.25, 0.82)
        this.btn4.setCommand = "VolumeUp"
        this.btn4.setOnTouch( this.button4Clicked)

        this.labVol = ui.addText(this.main3, "Volume Settings:", "caption,left",0.25, 0.82)
        /*this.btn5 = ui.addButton(this.main3, "Left", "Primary", 0.25, 0.82);
        this.btn5.setCommand = "Left"
        this.btn5.setOnTouch( this.button5Clicked )
*/
        // change primary color
        this.btn6= ui.addButton(this.main3, "Up", "Primary", 0.25, 0.82)
        this.btn6.setCommand = "Right"
        this.btn6.setOnTouch( this.button6Clicked)

this.btn7 = ui.addButton(this.main3, "Down", "Primary", 0.25, 0.82);
        this.btn7.setCommand = "Up"
        this.btn7.setOnTouch( this.button7Clicked )

        // change primary color
        this.btn8= ui.addButton(this.main3, "Mute", "Primary", 0.25, 0.82)
        this.btn8.setCommand = "Down"
        this.btn8.setOnTouch( this.button8Clicked)

        // change secondary color
        this.btn = ui.addButton(this.main, "Set Secondary", "Secondary", 0.7)
        this.btn.setOnTouch( this.changeSecondary )

        // some floating action button
        this.fab = ui.addFAB(this.main, "add", "secondary")
        // some floating action button
        this.fab2 = ui.addFAB(this.main, "delete", "secondary")
        
        uix = app.CreateUIExtras()

 layFam = app.CreateLayout( "Linear", "FillXY, Bottom, Horizontal, TouchThrough" )
 //layFam.SetPosition( 0.7, 0.8, 1.0, 0.1 )
fab2 = uix.CreateFAButton( "[fa-gear]" )
 fab2.SetMargins( 0.02, 0.01, 0.02, 0.01 )
 fab2.SetButtonColors( color, color2)//  "#db4437", "#c33d32")
 fab2.SetOnTouch( fab2_OnTouch )
 layFam.AddChild( fab2 )
fam = uix.CreateFAMenu( "[fa-book]", "Up,LabelsLeft" )
 fam.SetMargins( 0.02, 0.01, 0.02, 0.01 )
 fam.SetLabelBackColor( "#FFFFFF" )
 fam.SetLabelTextColor( color )
 fam.SetOnOpened( fam_OnOpened )
 fam.SetOnClosed( fam_OnClosed )
 layFam.AddChild( fam )
    }

    button1Clicked() {
    self = this.btn1;
    alert(self.setCommand);
        ui.setTheme( ui.theme.dark ? "light" : "dark")
    }
    
    button2Clicked() {
    self = this.btn2;
    alert(self.setCommand);
        ui.setTheme( ui.theme.dark ? "light" : "dark")
    }

 button3Clicked() {
    self = this.btn3;
    alert(self.setCommand);
        ui.setTheme( ui.theme.dark ? "light" : "dark")
    }
    
    button4Clicked() {
    self = this.btn4;
    alert(self.setCommand);
        ui.setTheme( ui.theme.dark ? "light" : "dark")
    }

button5Clicked() {
    self = this.btn5;
    alert(self.setCommand);
        ui.setTheme( ui.theme.dark ? "light" : "dark")
    }
    
    button6Clicked() {
    self = this.btn6;
    alert(self.setCommand);
        ui.setTheme( ui.theme.dark ? "light" : "dark")
    }
button7Clicked() {
    self = this.btn7;
    alert(self.setCommand);
        ui.setTheme( ui.theme.dark ? "light" : "dark")
    }
    
    button8Clicked() {
    self = this.btn8;
    alert(self.setCommand);
        ui.setTheme( ui.theme.dark ? "light" : "dark")
    }

    changePrimary() {
        ui.showColorPicker(null, null, function(value) {
            ui.setThemeColor(value)
        })
    }

    changeSecondary() {
        ui.showColorPicker(null, null, function(value) {
            ui.setThemeColor(null, value)
        })
    }
}