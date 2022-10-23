namespace NetCoreClient.ValueObjects
{
    internal class Altitude
    {
        public double Value { get; private set; }

        public Altitude(double value)
        {
            this.Value = value;
        }

    }
}
