namespace NetCoreClient.ValueObjects
{
    internal class Altitude
    {
        public string Name { get; private set; }
        public double Value { get; private set; }
        public DateTime Date { get; private set; }

        public Altitude(double value)
        {
            this.Name = "altitude";
            this.Value = value;
            this.Date = DateTime.Now;
        }

    }
}
