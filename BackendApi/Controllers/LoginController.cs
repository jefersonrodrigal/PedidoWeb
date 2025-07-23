using Microsoft.AspNetCore.Mvc;

namespace BackendApi.Controllers
{
    public class LoginController : ControllerBase
    {
        [HttpPost("/login")]
        public IActionResult Login()
        {
            return Ok(new { Message = "Logado"});
        }
    }
}
