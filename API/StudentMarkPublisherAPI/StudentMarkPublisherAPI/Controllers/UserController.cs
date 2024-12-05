
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentMarkPublisherAPI.Data;
using StudentMarkPublisherAPI.Model;

namespace StudentMarkPublisherAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserDbContext _context;

        public UserController(UserDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Register(UserDto user)
        {
            if (user == null) return BadRequest("Invalid data.");

         
            if (user.Role != "Teacher" && user.Role != "Parent")
            {
                return BadRequest("Invalid role. Please select either Teacher or Parent.");
            }

            
            var existingUser = await _context.users
                .FirstOrDefaultAsync(u => u.UserName == user.UserName);
            if (existingUser != null)
            {
                return BadRequest("User already exists.");
            }

            
            var newUser = new UserDto
            {
                UserName = user.UserName,
                Email = user.Email,
                Password = user.Password,
                Role = user.Role
            };

            
            _context.users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("User registered successfully.");
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(LoginViewModel loginViewModel)
        {

            var user = await _context.users
                .FirstOrDefaultAsync(u => u.UserName == loginViewModel.UserName && u.Password == loginViewModel.Password && u.Role == loginViewModel.Role);

            if (user == null)
            {
                return BadRequest("Invalid username or password.");
            }

            return Ok(new { Message = "Login successful", Data = user });
        }

        [HttpPost]
        [Route("MarkUplode")]
        public async Task<IActionResult> MarkUplode(Teacher teacher)
        {
            if (teacher == null) return BadRequest("Invalid data.");

            
            _context.teachers.Add(teacher);
            await _context.SaveChangesAsync();

            return Ok("Mark Add successfully.");

        }

        [HttpGet("GetAllMarksTeacher")]
        public async Task<IActionResult> GetAllMarksTeacher()
        {

            
            var studentDetails = await _context.teachers.ToListAsync();


            
            if (studentDetails == null)
            {
                return NotFound("No student Details found.");
            }

            
            return Ok(studentDetails);
        }

        [HttpGet("GetMarksParent")]
        public async Task<IActionResult> GetMarksParent(string userName)
        {

            
            var studentDetails = await _context.teachers.Where(x => x.parent == userName).ToListAsync();


            
            if (studentDetails == null)
            {
                return NotFound("No student Details found.");
            }

            
            return Ok(studentDetails);
        }




        [HttpDelete("DeleteStudent/{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            
            var student = await _context.teachers.FindAsync(id);

            if (student == null)
            {
                
                return NotFound("Student not found.");
            }

            
            _context.teachers.Remove(student);
            await _context.SaveChangesAsync();

            
            return Ok("Student deleted successfully.");
        }
        [HttpGet("AllParents")]

        public async Task<IActionResult> AllParents()
        {
            var parents = await _context.users.Where(x => x.Role == "Parent").ToListAsync();
            return Ok(parents);
        }



    }
}
