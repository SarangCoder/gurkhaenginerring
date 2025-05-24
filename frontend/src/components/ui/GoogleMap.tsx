const GoogleMap = () => {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden shadow-custom">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56303.73748161153!2d82.45953611622613!3d28.058922218656898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997947b6af09ead%3A0xf13c2cb27c551c37!2sGhorahi%2C%20Nepal!5e0!3m2!1sen!2sus!4v1693835278128!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Gorkha Engineering Location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;