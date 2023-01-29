using Alin.Contracts.Account;
using Microsoft.AspNetCore.Mvc;

namespace Alin.Controllers;

[Route("public")]
public class AccountController : ControllerBase
{
    public AccountController() { }

    [HttpPost("register")]
    [ProducesResponseType(201)]
    [ProducesResponseType(400)]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        return Ok();
    }


    [HttpPost("login")]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        return Ok();
    }
}
