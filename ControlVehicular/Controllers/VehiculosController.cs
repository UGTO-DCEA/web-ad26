using ControlVehicular.Data;
using ControlVehicular.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ControlVehicular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiculosController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public VehiculosController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }



        [HttpPost]
        public async Task<ActionResult> CrearVehiculo([FromBody] Vehiculo vehiculo)
        {
            await dbContext.Vehiculos.AddAsync(vehiculo);
            var result = await dbContext.SaveChangesAsync();

            if (result > 0)
            {
                return Ok();
            }
            return BadRequest();
        }


        [HttpGet]
        public async Task<ActionResult> ObtenerVehiculos()
        {
            List<Vehiculo> vehiculos = new List<Vehiculo>();
            vehiculos = dbContext.Vehiculos.Include(v => v.CatMarca).ToList();

            if (vehiculos != null)
            {
                return Ok(vehiculos);
            }
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> ObtenerVehiculoFromId([FromRoute] int id)
        {
            Vehiculo vehiculo = new Vehiculo();
            vehiculo = dbContext.Vehiculos.FirstOrDefault(v => v.Id == id)!;
            return Ok(vehiculo);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> EliminarVehiculo([FromRoute] int id)
        {
            Vehiculo vehiculo = new Vehiculo();
            vehiculo = dbContext.Vehiculos.FirstOrDefault(v => v.Id == id)!;
            if (vehiculo == null)
            {
                return NotFound();
            }
            dbContext.Vehiculos.Remove(vehiculo);
            var result = dbContext.SaveChangesAsync();
            if (result != null)
            {
                return Ok();
            }
            return BadRequest();
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> ActualizarVehiculo([FromRoute] int id,
            [FromBody] Vehiculo vehiculoActualizado)
        {
            Vehiculo vehiculo = new Vehiculo();
            vehiculo = dbContext.Vehiculos.FirstOrDefault(v => v.Id == id)!;
            if (vehiculo == null)
            {
                return NotFound();
            }
            vehiculo.Modelo = vehiculoActualizado.Modelo;
            dbContext.Vehiculos.Update(vehiculo);
            var result = dbContext.SaveChangesAsync();
            if (result != null)
            {
                return Ok();
            }
            return BadRequest();
        }

    }
}
