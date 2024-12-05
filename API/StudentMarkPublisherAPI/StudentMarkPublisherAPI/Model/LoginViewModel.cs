using System.ComponentModel.DataAnnotations;

namespace StudentMarkPublisherAPI.Model
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "UserName is required")]
        public string? UserName { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Role is required")]
        public string? Role { get; set; }
    }
}
