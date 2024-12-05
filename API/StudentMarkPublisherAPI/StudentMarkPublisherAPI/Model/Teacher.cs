using System.ComponentModel.DataAnnotations;

namespace StudentMarkPublisherAPI.Model
{
    public class Teacher
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string? studentName { get; set; }
        [Required]
        public string? batch { get;set; }
        [Range(0, 100, ErrorMessage = "Marks must be between 0 and 100.")]
        public int marks { get;set; }

        public string? parent { get; set; }


    }
}
