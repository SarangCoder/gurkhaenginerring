const GoogleMap = () => {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden shadow-custom">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.3265434500612!2d82.48519457441147!3d28.038429259975366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997950065c070b9%3A0xa864702906754aa!2sCodestack%20It%20solutions!5e0!3m2!1sen!2snp!4v1750332007877!5m2!1sen!2snp"
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



