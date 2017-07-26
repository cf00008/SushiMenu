var includeTimeStamp = +new Date();
document.open();
document.writeln('<meta http-equiv="Pragma" content="no-cache">');
document.writeln('<meta http-equiv="Cache-Control" content="no-cache">');
//jQuery (necessary for Bootstrap\'s JavaScript plugins)
document.writeln('<script src="vendor/js/jquery/1.12.4/jquery.min.js"></script>');
document.writeln('<script src="vendor/js/jqueryui/1.12.1/jquery-ui.min.js"></script>');
document.writeln('<script type="text/javascript" src="vendor/js/jqueryblockui/jquery.blockUI.js"></script>');
// bootstrap3
document.writeln('<link rel="stylesheet" href="vendor/css/bootstrap/bootstrap.css">');
document.writeln('<link rel="stylesheet" href="vendor/css/bootstrap/bootstrap-theme.css">');
document.writeln('<script src="vendor/js/bootstrap/bootstrap.js"></script>');
// slick slider lib
document.writeln('<link rel="stylesheet" type="text/css" href="vendor/css/slick/slick.css" />');
document.writeln('<link rel="stylesheet" type="text/css" href="vendor/css/slick/slick-theme.css" />');
document.writeln('<script type="text/javascript" src="vendor/js/slick/slick.min.js"></script>');
//Sidr
document.writeln('<link rel="stylesheet" type="text/css" href="vendor/css/sidr/jquery.sidr.light.css" />');
document.writeln('<script type="text/javascript" src="vendor/js/sidr/jquery.sidr.js"></script>');
// custom javascript
document.writeln('<link rel="stylesheet" href="css/style.css?verid=' + includeTimeStamp + '">');
document.writeln('<script type="text/javascript" src="js/common.js?verid=' + includeTimeStamp + '"></script>');
document.writeln('<script type="text/javascript" src="js/view.js?verid=' + includeTimeStamp + '"></script>');
document.close();
