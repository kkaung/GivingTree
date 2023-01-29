namespace Alin.Contracts.Account;

public record AuthResponse(
    Guid Id,
    string FirstName,
    string? MiddleName,
    string LastName,
    string UserName,
    string Email,
    string Token
);
