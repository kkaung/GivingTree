using Microsoft.AspNetCore.Mvc;

namespace Alin.Controllers;

[Route("api/users")]
public class UserController : ControllerBase
{
    public UserController() { }

    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        return Ok();
    }

    [HttpGet("{uid}")]
    public async Task<IActionResult> GetUser()
    {
        return Ok();
    }

    [HttpPut("{uid}")]
    public async Task<IActionResult> UpdateUser()
    {
        return Ok();
    }
}
