export default class CookieManager{
    static remove(name: string = "Authorization") {
      document.cookie = `${name}=; expires = Thu, 01 Jan 1970 00:00:00 GMT`
    }
    public static get(name:string = "Authorization") {
        name = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      public static set(name:string = "Authorization", value:string, horasExpirar:number) {
        var d = new Date();
        d.setTime(d.getTime() + (horasExpirar  * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
      }
}