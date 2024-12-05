using Microsoft.EntityFrameworkCore;
using StudentMarkPublisherAPI.Model;

namespace StudentMarkPublisherAPI.Data
{
    public class UserDbContext :DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) { }
        public DbSet<UserDto>users { get; set; }
        public DbSet<Teacher> teachers { get; set; }
    }
}
