using ControlVehicular.Data;
using ControlVehicular.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ControlVehicular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogosController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public CatalogosController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpPost]
        public async Task<ActionResult> CrearMarca([FromBody] CatMarca marca)
        {
            await dbContext.CatMarcas.AddAsync(marca);
            var result = await dbContext.SaveChangesAsync();

            if (result > 0)
            {
                return Ok();
            }
            return BadRequest();
        }


        [HttpGet]
        public async Task<ActionResult> ObtenerMarcas()
        {
            List<CatMarca> marcas = new List<CatMarca>();
            marcas = dbContext.CatMarcas.ToList();

            if (marcas != null)
            {
                return Ok(marcas);
            }
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> ObtenerMarcaPorId([FromRoute] int id)
        {
            CatMarca marca = new CatMarca();
            marca = dbContext.CatMarcas.FirstOrDefault(m => m.Id == id)!;
            return Ok(marca);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> EliminarMarca([FromRoute] int id)
        {
            CatMarca marca = new CatMarca();
            marca = dbContext.CatMarcas.FirstOrDefault(m => m.Id == id)!;
            if (marca == null)
            {
                return NotFound();
            }
            dbContext.CatMarcas.Remove(marca);
            var result = dbContext.SaveChangesAsync();
            if(result != null)
            {
                return Ok();
            }
            return BadRequest();
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> ActualizarMarca([FromRoute] int id, 
            [FromBody] CatMarca marcaActualizada)
        {
            CatMarca marca = new CatMarca();
            marca = dbContext.CatMarcas.FirstOrDefault(m => m.Id == id)!;
            if (marca == null)
            {
                return NotFound();
            }
            marca.Marca = marcaActualizada.Marca;
            dbContext.CatMarcas.Update(marca);
            var result = dbContext.SaveChangesAsync();
            if (result != null)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
