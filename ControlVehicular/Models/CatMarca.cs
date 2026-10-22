using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ControlVehicular.Models
{
    public class CatMarca
    {
        public int Id { get; set; }

        [Required]
        public string Marca { get; set; } = string.Empty;

        [JsonIgnore]
        public ICollection<Vehiculo> Vehiculos { get; set; } = new List<Vehiculo>();
    }
}
