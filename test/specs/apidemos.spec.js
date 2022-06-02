//Testes realizados com emulador Pixel 2 API 28 (Android 9)
describe("Testes API Demos", () => {
    afterEach(() => {
        driver.reset();
    });

    beforeEach(async () => {
        const titulo = await $('android=new UiSelector().text("API Demos").className("android.widget.TextView")').isDisplayed();
        expect(titulo).toBe(true);
        await $('~App').click();
    });
  
    it("Verificar o fluxo e utilização do aplicativo em App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE, verificar popup e opções CANCEL e Ok", async () => {  
        await $('~Alert Dialogs').click();
        const titulo = await $('android=new UiSelector().text("App/Alert Dialogs").className("android.widget.TextView")').isDisplayed();
        expect(titulo).toBe(true);

        await $('~OK Cancel dialog with a message').click();
        const mensagemAlerta = await $('android=new UiSelector().resourceId("android:id/content")').isDisplayed();
        expect(mensagemAlerta).toBe(true);
        const tituloAlerta = await $('android=new UiSelector().resourceId("android:id/alertTitle")').isDisplayed();
        expect(tituloAlerta).toBe(true);
        const iconeAlerta = await $('android=new UiSelector().resourceId("android:id/icon")').isDisplayed();
        expect(iconeAlerta).toBe(true);    
        await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').click();     
        
        await $('~OK Cancel dialog with a message').click();        
        const mensagemAlerta2 = await $('android=new UiSelector().resourceId("android:id/content")').isDisplayed();
        expect(mensagemAlerta2).toBe(true);
        const tituloAlerta2 = await $('android=new UiSelector().resourceId("android:id/alertTitle")').isDisplayed();
        expect(tituloAlerta2).toBe(true);
        const iconeAlerta2 = await $('android=new UiSelector().resourceId("android:id/icon")').isDisplayed();
        expect(iconeAlerta2).toBe(true);
        await $('android=new UiSelector().text("OK").className("android.widget.Button")').click();
    });

    it("Verificar o fluxo e utilização do aplicativo em App/Alert Dialogs/LIST DIALOG e verificar opção Command one", async () => {    
        await $('~Alert Dialogs').click();   
        const titulo = await $('android=new UiSelector().text("App/Alert Dialogs").className("android.widget.TextView")').isDisplayed();
        expect(titulo).toBe(true);
    
        await $('~List dialog').click();
        const visualizaTituloPopup = await $('android=new UiSelector().resourceId("android:id/title_template")').isDisplayed();
        expect(visualizaTituloPopup).toBe(true);
        const visualizaLista = await $('android=new UiSelector().resourceId("android:id/content")').isDisplayed();
        expect(visualizaLista).toBe(true);  
        await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').click();
        const visualizaMensagem = await $('android=new UiSelector().resourceId("android:id/message")').isDisplayed();
        expect(visualizaMensagem).toBe(true);
    });

    it("Verificar o fluxo e utilização do aplicativo em App/Alert Dialogs/LIST DIALOG e verificar opção Command two", async () => {
        await $('~Alert Dialogs').click();
        const titulo = await $('android=new UiSelector().text("App/Alert Dialogs").className("android.widget.TextView")').isDisplayed();
        expect(titulo).toBe(true);

        await $('~List dialog').click();
        const visualizaTituloPopup = await $('android=new UiSelector().resourceId("android:id/title_template")').isDisplayed();
        expect(visualizaTituloPopup).toBe(true);
        const visualizaLista = await $('android=new UiSelector().resourceId("android:id/content")').isDisplayed();
        expect(visualizaLista).toBe(true);
        await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').click();
        const visualizaMensagem = await $('android=new UiSelector().resourceId("android:id/message")').isDisplayed();
        expect(visualizaMensagem).toBe(true);
    });

    it("Verificar o fluxo e utilização do aplicativo em App/Alert Dialogs/LIST DIALOG e verificar opção Command three", async () => {
        await $('~Alert Dialogs').click();
        const titulo = await $('android=new UiSelector().text("App/Alert Dialogs").className("android.widget.TextView")').isDisplayed();
        expect(titulo).toBe(true);

        await $('~List dialog').click();
        const visualizaTituloPopup = await $('android=new UiSelector().resourceId("android:id/title_template")').isDisplayed();
        expect(visualizaTituloPopup).toBe(true);
        const visualizaLista = await $('android=new UiSelector().resourceId("android:id/content")').isDisplayed();
        expect(visualizaLista).toBe(true);
        await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').click();
        const visualizaMensagem = await $('android=new UiSelector().resourceId("android:id/message")').isDisplayed();
        expect(visualizaMensagem).toBe(true);
    });

    it("Verificar o fluxo e utilização do aplicativo em App/Alert Dialogs/LIST DIALOG e verificar a opção Command four", async () => {
        await $('~Alert Dialogs').click();
        const titulo = await $('android=new UiSelector().text("App/Alert Dialogs").className("android.widget.TextView")').isDisplayed();
        expect(titulo).toBe(true);

        await $('~List dialog').click();
        const visualizaTituloPopup = await $('android=new UiSelector().resourceId("android:id/title_template")').isDisplayed();
        expect(visualizaTituloPopup).toBe(true);
        const visualizaLista = await $('android=new UiSelector().resourceId("android:id/content")').isDisplayed();
        expect(visualizaLista).toBe(true);
        await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').click();
        const visualizaMensagem = await $('android=new UiSelector().resourceId("android:id/message")').isDisplayed();
        expect(visualizaMensagem).toBe(true);
    });

    it("Verificar o fluxo e utilização do aplicativo em App/Fragment/Hide and Show", async () => {
        await $('~Fragment').click();
        await $('~Hide and Show').click();
        const visualizaTitulo = await $('android=new UiSelector().text("App/Fragment/Hide and Show").className("android.widget.TextView")').isDisplayed();
        expect(visualizaTitulo).toBe(true);
        const visualizaSubTitulo = await $('android=new UiSelector().text("Demonstration of hiding and showing fragments.").className("android.widget.TextView")').isDisplayed();
        expect(visualizaSubTitulo).toBe(true);

        //Primeiro botão Hide    
        const visualizaInitialText = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/fragment1")').isDisplayed();
        expect(visualizaInitialText).toBe(true);
        await $('android=new UiSelector().resourceId("io.appium.android.apis:id/frag1hide")').click();      
        const visualizaBotaoShow = await $('android=new UiSelector().text("SHOW").className("android.widget.Button")').isDisplayed();
        expect(visualizaBotaoShow).toBe(true);
        const naoVisualizaInitialText = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/fragment1")').isDisplayed();
        expect(naoVisualizaInitialText).toBe(false);

        //Primeiro botão Show
        await $('android=new UiSelector().resourceId("io.appium.android.apis:id/frag1hide")').click();       
        const visualizaBotaoHide = await $('android=new UiSelector().text("HIDE").className("android.widget.Button")').isDisplayed();
        expect(visualizaBotaoHide).toBe(true);
        const visualizaNovamenteInitialText = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/fragment1")').isDisplayed();
        expect(visualizaNovamenteInitialText).toBe(true);

        //Segundo botão Hide
        const visualizaInitialText2 = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/fragment2")').isDisplayed();
        expect(visualizaInitialText2).toBe(true);
        await $('android=new UiSelector().resourceId("io.appium.android.apis:id/frag2hide")').click();        
        const visualizaBotaoShow2 = await $('android=new UiSelector().text("SHOW").className("android.widget.Button")').isDisplayed();
        expect(visualizaBotaoShow2).toBe(true);
        const naoVisualizaInitialText2 = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/fragment2")').isDisplayed();
        expect(naoVisualizaInitialText2).toBe(false);

        //Segundo botão Show
        await $('android=new UiSelector().resourceId("io.appium.android.apis:id/frag2hide")').click();          
        const visualizaBotaoHide2 = await $('android=new UiSelector().text("HIDE").className("android.widget.Button")').isDisplayed();
        expect(visualizaBotaoHide2).toBe(true);
        const visualizaNovamenteInitialText2 = await $('android=new UiSelector().resourceId("io.appium.android.apis:id/fragment2")').isDisplayed();
        expect(visualizaNovamenteInitialText2).toBe(true);
    });

    it("Verificar o fluxo e utilização do aplicativo em App/Action Bar/Display options, a opção DISPLAY_HOME_AS_UP", async () => {
        await $('~Action Bar').click();
        await $('~Display Options').click();
        const visualizaTitulo = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(visualizaTitulo).toBe(true);
 
        await $('~DISPLAY_HOME_AS_UP').click();
        const visualizaSetaVoltar = await $('~Navigate up').isDisplayed();
        expect(visualizaSetaVoltar).toBe(true);
        const visualizaTitulo2 = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(visualizaTitulo2).toBe(true);
 
        await $('~DISPLAY_HOME_AS_UP').click();
        const visualizaTitulo3 = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(visualizaTitulo3).toBe(true);
        const naoVisualizaSetaVoltar = await $('~Navigate up').isDisplayed();
        expect(naoVisualizaSetaVoltar).toBe(false);
       
        await $('~More options').click();
        await $('android=new UiSelector().resourceId("android:id/title")').click();
        const visualizaOpcoes = await $('android=new UiSelector().resourceId("android:id/decor_content_parent")').isDisplayed();
        expect(visualizaOpcoes).toBe(true);
    });

    it("Verificar o fluxo e utilização do aplicativo em App/Action Bar/Display options, a opção DISPLAY_SHOW_TITLE;", async () => {   
        await $('~Action Bar').click();
        await $('~Display Options').click();
        const visualizaTitulo = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(visualizaTitulo).toBe(true);

        await $('~DISPLAY_SHOW_TITLE').click();
        const naoVisualizaTitulo = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(naoVisualizaTitulo).toBe(false);

        await $('~DISPLAY_SHOW_TITLE').click();
        const visualizaTituloAoClicar = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(visualizaTituloAoClicar).toBe(true);

        await $('~More options').click();
        await $('android=new UiSelector().resourceId("android:id/title")').click();
        const visualizaOpcoes = await $('android=new UiSelector().resourceId("android:id/decor_content_parent")').isDisplayed();
        expect(visualizaOpcoes).toBe(true);
    });

    it("Verificar o fluxo e utilização do aplicativo em App/Action Bar/Display options, a opção DISPLAY_SHOW_CUSTOM", async () => {
        await $('~Action Bar').click();
        await $('~Display Options').click();
        const visualizaTitulo = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(visualizaTitulo).toBe(true);

        await $('~DISPLAY_SHOW_CUSTOM').click();
        const visualizaBotaoCustomView = await $('~Custom View!').isDisplayed();
        expect(visualizaBotaoCustomView).toBe(true);

        await $('~DISPLAY_SHOW_CUSTOM').click();
        const naoVisualizaBotaoCustomView = await $('~Custom View!').isDisplayed();
        expect(naoVisualizaBotaoCustomView).toBe(false);

        await $('~More options').click();
        await $('android=new UiSelector().resourceId("android:id/title")').click();
        const visualizaOpcoes = await $('android=new UiSelector().resourceId("android:id/decor_content_parent")').isDisplayed();
        expect(visualizaOpcoes).toBe(true);
    });

    it("Verificar o fluxo e utilização do aplicativo em App/Action Bar/Display options, a opção NAVIGATION", async () => {
        await $('~Action Bar').click();
        await $('~Display Options').click();
        const visualizaTitulo = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(visualizaTitulo).toBe(true);

        await $('~Navigation').click();
        const visualizaTab1 = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').isDisplayed();
        expect(visualizaTab1).toBe(true);
        const visualizaTab2 = await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').isDisplayed();
        expect(visualizaTab2).toBe(true);
        const visualizaTab3 = await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').isDisplayed();
        expect(visualizaTab3).toBe(true);

        await $('~Navigation').click();
        const naoVisualizaTab1 = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').isDisplayed();
        expect(naoVisualizaTab1).toBe(false);
        const naoVisualizaTab2 = await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').isDisplayed();
        expect(naoVisualizaTab2).toBe(false);
        const naoVisualizaTab3 = await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').isDisplayed();
        expect(naoVisualizaTab3).toBe(false);

        await $('~More options').click();
        await $('android=new UiSelector().resourceId("android:id/title")').click();
        const visualizaOpcoes = await $('android=new UiSelector().resourceId("android:id/decor_content_parent")').isDisplayed();
        expect(visualizaOpcoes).toBe(true);
    });
});