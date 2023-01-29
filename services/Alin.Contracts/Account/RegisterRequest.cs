namespace Alin.Contracts.Account;

public record RegisterRequest(
    string FirstName,
    string MiddleName,
    string LastName,
    string UserName,
    string Email,
    string Password
);
