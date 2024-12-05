using System.ComponentModel.DataAnnotations;

namespace StudentMarkPublisherAPI.Model
{
    public class UserDto
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "UserName is required")]
        public string? UserName { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "invalid Email format")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Confirm Password is required")]
        [Compare("Password", ErrorMessage = "Passwords do not match")]
        [DataType(DataType.Password)]
        public string? RePassword { get; set; }

        [Required(ErrorMessage = "Role is required")]
        public string? Role { get; set; }


    }
}
