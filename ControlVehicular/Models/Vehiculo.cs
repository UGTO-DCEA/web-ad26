using System.ComponentModel.DataAnnotations;

namespace ControlVehicular.Models
{
    public class Vehiculo
    {
        public int Id { get; set; }

        [MinLength(4)]
        [MaxLength(4)]
        public string Year { get; set; } = string.Empty;
        public string Modelo { get; set; } = string.Empty;

        public int CatMarcaId { get; set; }
        public CatMarca? CatMarca { get; set; }
    }
}
