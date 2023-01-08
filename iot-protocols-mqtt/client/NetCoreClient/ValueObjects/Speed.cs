namespace NetCoreClient.ValueObjects
{
    internal class Speed
    {
        public string Name { get; private set; }
        public int Value { get; private set; }
        public DateTime Date { get; private set; }
        
        public Speed(int value)
        {
            this.Name = "speed";
            this.Value = value;
            this.Date = DateTime.Now;
        }

    }
}
