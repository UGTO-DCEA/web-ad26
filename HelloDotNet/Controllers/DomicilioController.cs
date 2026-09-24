using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class DomicilioController : ControllerBase
{
    [HttpGet]
    public ActionResult<Domicilio> GetDomicilio()
    {
        Domicilio domicilio = new Domicilio
        {
            Calle = "Paz",
            NumeroExterior = "1",
            Colonia = "Colonia 1",
            NumeroInterior = "1",
            CodigoPostal = "123456",
            NumeroHabitaciones = 5
        };
        return Ok(domicilio);
    }

    [HttpGet("lista")]
    public ActionResult<List<Domicilio>> GetListaDomicilios()
    {
        var domicilios = new List<Domicilio>
        {
            new Domicilio
            {
                Calle = "Paz",
                NumeroExterior = "1",
                Colonia = "Colonia 1",
                NumeroInterior = "1A",
                CodigoPostal = "123456",
                NumeroHabitaciones = 5
            },
            new Domicilio
            {
                Calle = "Reforma",
                NumeroExterior = "2",
                Colonia = "Colonia 2",
                NumeroInterior = "2B",
                CodigoPostal = "654321",
                NumeroHabitaciones = 3
            }
        };
        return Ok(domicilios);
    }
}